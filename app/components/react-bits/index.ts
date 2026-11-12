// React Bits ships plain JSX; these typed aliases keep every prop optional for TypeScript callers.
import type { ComponentType } from "react";
import _BlurText from "./BlurText";
import _LightRays from "./LightRays";
import _StarBorder from "./StarBorder";
import _CountUp from "./CountUp";

type Loose = ComponentType<Record<string, unknown>>;

export const BlurText = _BlurText as unknown as Loose;
export const LightRays = _LightRays as unknown as Loose;
export const StarBorder = _StarBorder as unknown as Loose;
export const CountUp = _CountUp as unknown as Loose;
