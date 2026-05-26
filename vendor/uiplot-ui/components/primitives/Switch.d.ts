import * as react_jsx_runtime from 'react/jsx-runtime';

interface SwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (next: boolean) => void;
    label?: string;
    disabled?: boolean;
}
declare function Switch({ checked, defaultChecked, onChange, label, disabled }: SwitchProps): react_jsx_runtime.JSX.Element;

export { Switch, type SwitchProps };
