import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes, ReactNode } from 'react';

interface MonoLabelProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: "default" | "accent" | "muted";
    children: ReactNode;
}
declare function MonoLabel({ tone, style, children, ...rest }: MonoLabelProps): react_jsx_runtime.JSX.Element;

export { MonoLabel, type MonoLabelProps };
