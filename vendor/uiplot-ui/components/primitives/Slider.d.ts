import * as react_jsx_runtime from 'react/jsx-runtime';

interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (next: number) => void;
    showValue?: boolean;
}
declare function Slider({ min, max, step, value, defaultValue, onChange, showValue, }: SliderProps): react_jsx_runtime.JSX.Element;

export { Slider, type SliderProps };
