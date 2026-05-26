import * as react_jsx_runtime from 'react/jsx-runtime';

interface DialSliderProps {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    /** Track length in px (height for vertical, width for horizontal). */
    length?: number;
    orientation?: "vertical" | "horizontal";
    label?: string;
    unit?: string;
    /** Number of tick marks along the track. */
    ticks?: number;
    onChange?: (next: number) => void;
}
declare function DialSlider({ value, defaultValue, min, max, step, length, orientation, label, unit, ticks, onChange, }: DialSliderProps): react_jsx_runtime.JSX.Element;

export { DialSlider, type DialSliderProps };
