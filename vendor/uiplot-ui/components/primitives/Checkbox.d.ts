import * as react_jsx_runtime from 'react/jsx-runtime';

interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (next: boolean) => void;
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
}
declare function Checkbox({ checked, defaultChecked, onChange, label, disabled, indeterminate, }: CheckboxProps): react_jsx_runtime.JSX.Element;

export { Checkbox, type CheckboxProps };
