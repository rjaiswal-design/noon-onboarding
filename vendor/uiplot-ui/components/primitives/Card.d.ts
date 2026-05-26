import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    padded?: boolean;
}
declare function Card({ active, padded, style, children, ...rest }: CardProps): react_jsx_runtime.JSX.Element;
declare function CardHeader({ eyebrow, title, meta, }: {
    eyebrow?: string;
    title: string;
    meta?: string;
}): react_jsx_runtime.JSX.Element;

export { Card, CardHeader, type CardProps };
