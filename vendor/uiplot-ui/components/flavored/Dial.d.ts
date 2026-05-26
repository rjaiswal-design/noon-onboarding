import * as react_jsx_runtime from 'react/jsx-runtime';

interface DialProps {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    size?: number;
    label?: string;
    unit?: string;
    onChange?: (next: number) => void;
}
declare function Dial({ value, defaultValue, min, max, step, size, label, unit, onChange, }: DialProps): react_jsx_runtime.JSX.Element;

export { Dial, type DialProps };
