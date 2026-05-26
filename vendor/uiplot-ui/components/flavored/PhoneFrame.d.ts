import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface PhoneFrameProps {
    children?: ReactNode;
    width?: number;
    height?: number;
}
declare function PhoneFrame({ children, width, height }: PhoneFrameProps): react_jsx_runtime.JSX.Element;

export { PhoneFrame, type PhoneFrameProps };
