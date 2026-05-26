import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface ToggleProps {
    pressed?: boolean;
    defaultPressed?: boolean;
    onChange?: (next: boolean) => void;
    children: ReactNode;
    size?: "sm" | "md";
    disabled?: boolean;
}
declare function Toggle({ pressed, defaultPressed, onChange, children, size, disabled, }: ToggleProps): react_jsx_runtime.JSX.Element;

export { Toggle, type ToggleProps };
