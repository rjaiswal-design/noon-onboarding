import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type Tone = "neutral" | "accent" | "success" | "danger";
interface AlertProps {
    tone?: Tone;
    title?: string;
    children?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
}
declare function Alert({ tone, title, children, icon, action }: AlertProps): react_jsx_runtime.JSX.Element;

export { Alert, type AlertProps };
