import * as react_jsx_runtime from 'react/jsx-runtime';

interface ProgressProps {
    value: number;
    max?: number;
    showValue?: boolean;
    tone?: "accent" | "success" | "danger";
}
declare function Progress({ value, max, showValue, tone }: ProgressProps): react_jsx_runtime.JSX.Element;

export { Progress, type ProgressProps };
