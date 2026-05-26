import * as react_jsx_runtime from 'react/jsx-runtime';

interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (next: string) => void;
    placeholder?: string;
}
declare function Select({ options, value, defaultValue, onChange, placeholder, }: SelectProps): react_jsx_runtime.JSX.Element;

export { Select, type SelectOption, type SelectProps };
