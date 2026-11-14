"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Content } from "../content";

/**
 * Scroll-driven intro to the work section, adapted from the MotionSites "Video Ribbon" design.
 * One number (scroll progress 0–1) drives everything: the two headline lines pass each other,
 * a ribbon of real product screens sweeps around the viewer on a fixed 3D rail, then each
 * screen lands in a calm grid with a link to its project.
 *
 * Visitors who prefer reduced motion (or have no WebGL) get the same screens as a plain grid.
 */

type Ribbon = Content["ribbon"];

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const out = (t: number) => 1 - (1 - t) ** 3;
const span = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

const VERTEX = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const FRAGMENT = `uniform sampler2D map;uniform vec2 cover;uniform float aspect,ready,radius;varying vec2 vUv;
void main(){
  vec2 q=(abs(vUv-.5)-.5)*vec2(aspect,1.)+radius;
  float d=length(max(q,0.))+min(max(q.x,q.y),0.)-radius;
  float px=fwidth(d),a=1.-smoothstep(-px,px,d);
  if(a<.01)discard;
  vec2 uv=vUv;if(!gl_FrontFacing)uv.x=1.-uv.x;
  vec3 c=mix(vec3(.1,.16,.14),texture2D(map,(uv-.5)*cover+.5).rgb,ready);
  float edge=smoothstep(-.012-px,-.012,d);
  gl_FragColor=vec4(mix(c,vec3(1.),edge*.12),a);
}`;

export default function WorkRibbon({ text }: { text: Ribbon }) {
  const items = text.items;
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const track = trackRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!track || !stage || !canvas) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      } catch {
        track.dataset.fallback = "true";
        return;
      }
      renderer.setClearColor(0, 0);
      renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
      const scene = new THREE.Scene();
      const FOV = 35;
      const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

      /* ---------- the rail: a shallow arc close to the camera, long runs far behind it ---------- */
      const SAMPLES = 1200;
      const pathP: import("three").Vector3[] = [];
      const pathT: import("three").Vector3[] = [];
      const PH0 = -1.5;
      const PH1 = Math.PI * 2 + 1.35;
      const pts: import("three").Vector3[] = [];
      for (let i = 0; i <= 160; i++) {
        const t = i / 160;
        const ph = mix(PH0, PH1, t);
        const cs = Math.cos(ph);
        const u = 2 * t - 1;
        const depth = cs > 0 ? 7.6 + 16.4 * cs ** 0.9 : 7.6 + 2.2 * cs;
        const edge = 0.84 + 0.5 * span(0.14 - t, 0, 0.14) + 0.8 * span(t, 0.84, 1);
        pts.push(
          new THREE.Vector3(
            edge * Math.sin(ph) * depth * 0.561,
            0.5 * Math.sign(u) * Math.abs(u) ** 1.4 * depth * 0.63,
            -depth,
          ),
        );
      }
      const path = new THREE.CatmullRomCurve3(pts, false, "centripetal");
      path.arcLengthDivisions = 1500;
      const PATH_L = path.getLength();
      for (let i = 0; i <= SAMPLES; i++) {
        const u = i / SAMPLES;
        pathP.push(path.getPointAt(u));
        pathT.push(path.getTangentAt(u));
      }
      const at = (s: number, op: import("three").Vector3, ot: import("three").Vector3) => {
        const f = clamp(s / PATH_L) * SAMPLES;
        const i = Math.min(SAMPLES - 1, Math.floor(f));
        const k = f - i;
        op.lerpVectors(pathP[i], pathP[i + 1], k);
        ot.lerpVectors(pathT[i], pathT[i + 1], k).normalize();
      };

      /* ---------- cards ---------- */
      const CARD_W = 2.1;
      const CARD_H = 1.1;
      const GAP = 0.03;
      const STEP = CARD_W + GAP;
      const NX = 28;
      const NY = 3;
      type Rect = { x: number; y: number; w: number; h: number; vw: number; vh: number; c: number; r: number };
      const loader = new THREE.TextureLoader();
      const cards = items.map((item, i) => {
        const geo = new THREE.PlaneGeometry(1, 1, NX, NY);
        const mat = new THREE.ShaderMaterial({
          vertexShader: VERTEX,
          fragmentShader: FRAGMENT,
          transparent: true,
          side: THREE.DoubleSide,
          uniforms: {
            map: { value: null },
            cover: { value: new THREE.Vector2(1, 1) },
            aspect: { value: CARD_W / CARD_H },
            ready: { value: 0 },
            radius: { value: 0.03 },
          },
        });
        const tex = loader.load(item.image, (t) => {
          const img = t.image as HTMLImageElement;
          const va = img.width / img.height;
          const ca = CARD_W / CARD_H;
          mat.uniforms.cover.value.set(va > ca ? ca / va : 1, va > ca ? 1 : va / ca);
          mat.uniforms.ready.value = 1;
        });
        tex.colorSpace = THREE.NoColorSpace;
        tex.anisotropy = 8;
        mat.uniforms.map.value = tex;
        const mesh = new THREE.Mesh(geo, mat);
        mesh.frustumCulled = false;
        mesh.visible = false;
        scene.add(mesh);
        return { i, geo, mat, tex, mesh, rect: null as Rect | null };
      });

      /* ---------- layout ---------- */
      const GZ = 8;
      let W = 1;
      let H = 1;
      let asp = 1;
      let cols = 3;
      let rows = 2;
      let tanH = 0.3153;
      const resize = () => {
        W = stage.clientWidth;
        H = stage.clientHeight;
        asp = W / H;
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.setSize(W, H, false);
        camera.aspect = asp;
        camera.fov = asp < 16 / 9 ? (Math.atan(0.561 / asp) * 360) / Math.PI : FOV;
        camera.updateProjectionMatrix();
        tanH = Math.tan((camera.fov * Math.PI) / 360);
        cols = asp < 0.9 ? 2 : 3;
        rows = Math.ceil(items.length / cols);
      };
      resize();
      window.addEventListener("resize", resize);

      const grid = (i: number): Rect => {
        const vh = 2 * GZ * tanH;
        const vw = vh * asp;
        const gw = vw * (cols === 3 ? 0.78 : 0.88);
        const gap = gw * 0.02;
        // leave room under each row for the project name
        const rowGap = Math.max(gap * 3, (44 / H) * vh);
        const cw = (gw - gap * (cols - 1)) / cols;
        const ch = cw / (CARD_W / CARD_H);
        const gh = ch * rows + rowGap * (rows - 1);
        const c = i % cols;
        const r = Math.floor(i / cols);
        return {
          x: -gw / 2 + cw / 2 + c * (cw + gap),
          y: gh / 2 - ch / 2 - r * (ch + rowGap) + (14 / H) * vh,
          w: cw,
          h: ch,
          vw,
          vh,
          c,
          r,
        };
      };

      /* ---------- poses ---------- */
      const op = new THREE.Vector3();
      const ot = new THREE.Vector3();
      const up = new THREE.Vector3();
      const Y = new THREE.Vector3(0, 1, 0);
      const vp = new THREE.Vector3();
      type Card = (typeof cards)[number];
      const poseRibbon = (c: Card, head: number) => {
        const pos = c.geo.attributes.position;
        const centre = head - c.i * STEP;
        for (let iy = 0; iy <= NY; iy++)
          for (let ix = 0; ix <= NX; ix++) {
            const k = iy * (NX + 1) + ix;
            const lu = ix / NX - 0.5;
            const lv = 0.5 - iy / NY;
            at(centre + lu * CARD_W, op, ot);
            up.copy(Y).addScaledVector(ot, -Y.dot(ot)).normalize();
            vp.copy(op).addScaledVector(up, lv * CARD_H);
            pos.setXYZ(k, vp.x, vp.y, vp.z);
          }
        pos.needsUpdate = true;
      };
      const poseGrid = (c: Card, q: number) => {
        const g = grid(c.i);
        const pos = c.geo.attributes.position;
        const mid = (cols - 1) / 2;
        const dx = (g.c - mid) * 1.2;
        const dy = g.r < rows / 2 ? 1 : -1;
        const ox = dx * g.vw * 0.62 * (1 - q);
        const oy = dy * g.vh * (g.c === mid ? 0.95 : 0.34) * (1 - q);
        const tilt = (1 - q) * 0.22 * (g.c - mid || 0.5) * dy;
        const cs = Math.cos(tilt);
        const sn = Math.sin(tilt);
        for (let iy = 0; iy <= NY; iy++)
          for (let ix = 0; ix <= NX; ix++) {
            const k = iy * (NX + 1) + ix;
            const x = (ix / NX - 0.5) * g.w;
            const y = (0.5 - iy / NY) * g.h;
            pos.setXYZ(
              k,
              g.x + ox + x * cs - y * sn,
              g.y + oy + x * sn + y * cs,
              -GZ - (1 - q) * 0.6 * Math.sin((ix / NX) * Math.PI),
            );
          }
        pos.needsUpdate = true;
        c.rect = g;
      };

      /* ---------- scroll: progress starts while the stage is still sliding into view ---------- */
      let target = 0;
      let p = -1;
      const readScroll = () => {
        const rect = track.getBoundingClientRect();
        const lead = window.innerHeight * 0.5;
        target = clamp((lead - rect.top) / (rect.height - window.innerHeight + lead));
      };

      const RIB_A = 0.14;
      const RIB_B = 0.63;
      const LABEL_A = 0.8;
      const render = () => {
        const rise = (1 - out(span(p, 0, 0.12))) * 34;
        const run = mix(-50, 76, span(p, 0, 0.58));
        // the lines leave the screen on wide windows; on narrow ones they also fade before the grid lands
        const lineA = String(1 - span(p, 0.5, 0.6));
        if (line1Ref.current) {
          line1Ref.current.style.transform = `translate3d(${run}vw,${rise}vh,0)`;
          line1Ref.current.style.opacity = lineA;
        }
        if (line2Ref.current) {
          line2Ref.current.style.transform = `translate3d(${-run}vw,${rise}vh,0)`;
          line2Ref.current.style.opacity = lineA;
        }
        if (captionRef.current) {
          captionRef.current.style.opacity = String(1 - span(p, 0.52, 0.57));
          captionRef.current.style.transform = `translate(-50%,${rise}vh)`;
        }
        if (crossRef.current) crossRef.current.style.opacity = String(1 - span(p, 0.02, 0.1));
        if (hintRef.current) hintRef.current.style.opacity = String(1 - span(p, 0.7, 0.8));

        const total = PATH_L + cards.length * STEP;
        const head = mix(0, total, span(p, RIB_A, RIB_B));
        const end = PATH_L - CARD_W;
        const labelA = span(p, LABEL_A, LABEL_A + 0.08);
        for (const c of cards) {
          const s = head - c.i * STEP;
          if (s < end) {
            c.mesh.visible = s > CARD_W;
            c.rect = null;
            if (c.mesh.visible) poseRibbon(c, head);
          } else {
            // each card flies to its slot the moment it leaves the rail
            const st = mix(RIB_A, RIB_B, (end + c.i * STEP) / total);
            const q = out(span(p, st, st + 0.13));
            c.mesh.visible = q > 0.001;
            if (c.mesh.visible) poseGrid(c, q);
          }
          const label = labelRefs.current[c.i];
          if (label) {
            const g = c.rect;
            const shown = !!g && labelA > 0;
            label.style.visibility = shown ? "visible" : "hidden";
            if (g && shown) {
              const x = W / 2 + ((g.x - g.w / 2) / g.vw) * W;
              const y = H / 2 - ((g.y - g.h / 2) / g.vh) * H + 10 + (1 - labelA) * 8;
              label.style.opacity = String(labelA);
              label.style.width = `${(g.w / g.vw) * W}px`;
              label.style.transform = `translate3d(${x}px,${y}px,0)`;
            }
          }
        }
        renderer.render(scene, camera);
      };

      /* ---------- hover and click on landed cards ---------- */
      const hitTest = (e: PointerEvent | MouseEvent) => {
        if (p < LABEL_A) return null;
        const box = stage.getBoundingClientRect();
        const nx = (e.clientX - box.left) / W - 0.5;
        const ny = 0.5 - (e.clientY - box.top) / H;
        for (const c of cards) {
          const g = c.rect;
          if (g && Math.abs(nx * g.vw - g.x) < g.w / 2 && Math.abs(ny * g.vh - g.y) < g.h / 2) return c;
        }
        return null;
      };
      let hovered = -1;
      const onMove = (e: PointerEvent) => {
        const hit = hitTest(e)?.i ?? -1;
        if (hit === hovered) return;
        if (hovered >= 0) labelRefs.current[hovered]?.removeAttribute("data-hover");
        if (hit >= 0) labelRefs.current[hit]?.setAttribute("data-hover", "");
        hovered = hit;
        canvas.style.cursor = hit >= 0 ? "pointer" : "";
      };
      const onClick = (e: MouseEvent) => {
        const hit = hitTest(e);
        if (hit) labelRefs.current[hit.i]?.click();
      };
      stage.addEventListener("pointermove", onMove);
      canvas.addEventListener("click", onClick);

      /* ---------- loop, only while the section is near the viewport ---------- */
      let raf = 0;
      let running = false;
      const loop = () => {
        readScroll();
        if (p < 0) p = target;
        p += (target - p) * 0.12;
        if (Math.abs(target - p) < 0.00005) p = target;
        render();
        raf = requestAnimationFrame(loop);
      };
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !running) {
            running = true;
            raf = requestAnimationFrame(loop);
          } else if (!entry.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        },
        { rootMargin: "20% 0px" },
      );
      io.observe(track);
      track.dataset.ready = "true";

      cleanup = () => {
        io.disconnect();
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
        stage.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("click", onClick);
        for (const c of cards) {
          c.geo.dispose();
          c.mat.dispose();
          c.tex.dispose();
        }
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [items]);

  return (
    <section aria-label={text.label} className="ribbon bg-ink text-paper">
      {/* Scroll scene */}
      <div ref={trackRef} className="ribbon-track h-[420vh] motion-reduce:hidden">
        <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-mint/10 to-transparent"
          />
          <div ref={crossRef} aria-hidden="true" className="absolute inset-x-5 top-[37.5%] h-px bg-paper/15 md:inset-x-8">
            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink px-2 text-sm text-paper/50">+</span>
          </div>

          <div aria-hidden="true" className="font-display">
            <div ref={line1Ref} className="ribbon-line ribbon-line-1" style={{ transform: "translate3d(-50vw,34vh,0)" }}>
              <span className="mr-[15vw] inline-block">{text.line1}</span>
            </div>
            <div ref={line2Ref} className="ribbon-line ribbon-line-2" style={{ transform: "translate3d(50vw,34vh,0)" }}>
              <span className="ml-[15vw] inline-block text-mint">{text.line2}</span>
            </div>
          </div>
          <p
            ref={captionRef}
            className="ribbon-caption absolute left-1/2 w-[19em] text-center text-[clamp(10px,0.8vw,13px)] font-medium uppercase leading-snug tracking-wider text-paper/80"
            style={{ transform: "translate(-50%,34vh)" }}
          >
            {text.caption}
          </p>

          <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 block h-full w-full" />

          {items.map((item, i) => (
            <a
              key={item.title}
              ref={(el) => {
                labelRefs.current[i] = el;
              }}
              href={item.href}
              className="ribbon-label"
              style={{ visibility: "hidden" }}
            >
              <span className="truncate">{item.title}</span>
              <span aria-hidden="true" className="ribbon-label-arrow">
                ↓
              </span>
            </a>
          ))}

          <div
            ref={hintRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-5 bottom-6 flex items-end justify-between gap-6 text-xs uppercase tracking-widest text-paper/60 md:inset-x-8"
          >
            <span className="hidden sm:block" dir="ltr">
              Laravel / Next.js / MySQL / AI
            </span>
            <span className="flex items-center gap-3">
              {text.hint}
              <span className="ribbon-scroll-line" />
            </span>
          </div>
        </div>
      </div>

      {/* Same screens without motion */}
      <div className="ribbon-static mx-auto hidden max-w-6xl px-5 py-20 motion-reduce:block md:px-8">
        <p className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          {text.staticBefore}
          <span className="text-mint">{text.staticAccent}</span>
        </p>
        <ul className="mt-10 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="group block">
                <span className="relative block aspect-[21/11] overflow-hidden rounded-lg border border-white/10">
                  <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 360px, 100vw" className="object-cover" />
                </span>
                <span className="mt-3 block text-sm font-semibold text-paper/85 group-hover:text-mint">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
