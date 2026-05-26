import * as react_jsx_runtime from 'react/jsx-runtime';

interface RadioOption {
    value: string;
    label: string;
    hint?: string;
}
interface RadioGroupProps {
    options: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (next: string) => void;
    orientation?: "vertical" | "horizontal";
}
declare function RadioGroup({ options, value, defaultValue, onChange, orientation, }: RadioGroupProps): react_jsx_runtime.JSX.Element;

export { RadioGroup, type RadioGroupProps, type RadioOption };
