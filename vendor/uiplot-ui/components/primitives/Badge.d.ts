import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes } from 'react';

type Tone = "neutral" | "accent" | "success" | "danger" | "muted";
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: Tone;
}
declare function Badge({ tone, style, children, ...rest }: BadgeProps): react_jsx_runtime.JSX.Element;

export { Badge, type BadgeProps };
