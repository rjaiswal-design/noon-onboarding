import * as react_jsx_runtime from 'react/jsx-runtime';
import { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    optional?: boolean;
}
declare function Label({ children, optional, style, ...rest }: LabelProps): react_jsx_runtime.JSX.Element;

export { Label, type LabelProps };
