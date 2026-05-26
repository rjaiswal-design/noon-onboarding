import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare const DEFAULT_LOGOS: ReactNode[][];
interface LogosCarouselProps {
    /** Rows of logo nodes — each row swaps in cyclically. */
    logos?: ReactNode[][];
    /** Stagger between sibling logos in seconds. */
    stagger?: number;
    /** Show the first N logos per row (defaults to all). */
    count?: number;
    /** Cycle interval in ms. */
    interval?: number;
}
declare function LogosCarousel({ logos, stagger, count, interval, }: LogosCarouselProps): react_jsx_runtime.JSX.Element;

export { DEFAULT_LOGOS, LogosCarousel, type LogosCarouselProps };
