import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

interface BlurRevealProps {
    children: ReactNode;
    /** Max blur in px applied to the content at the start. */
    blur?: number;
    /** Sweep duration in ms. The blur takes 1.5× this to fade out. */
    duration?: number;
    /** Show a replay button below the banner. */
    replayable?: boolean;
    /** Re-trigger the animation when this value changes. */
    resetKey?: number | string;
    className?: string;
    style?: CSSProperties;
}
declare function BlurReveal({ children, blur, duration, replayable, resetKey, className, style, }: BlurRevealProps): react_jsx_runtime.JSX.Element;
/** Reference contents in the spirit of the original — composes with BlurReveal. */
declare function BlurRevealContents({ label, cta, }: {
    label?: string;
    cta?: string;
}): react_jsx_runtime.JSX.Element;

export { BlurReveal, BlurRevealContents, type BlurRevealProps };
