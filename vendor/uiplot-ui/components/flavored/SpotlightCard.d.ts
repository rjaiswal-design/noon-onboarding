import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

interface SpotlightCardProps {
    children: ReactNode;
    style?: CSSProperties;
    intensity?: number;
    className?: string;
}
declare function SpotlightCard({ children, style, intensity, className, }: SpotlightCardProps): react_jsx_runtime.JSX.Element;

export { SpotlightCard, type SpotlightCardProps };
