import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface TitleStrokeProps {
    children: ReactNode;
    size?: number;
    italic?: boolean;
    as?: "h1" | "h2" | "h3";
}
declare function TitleStroke({ children, size, italic, as: Tag }: TitleStrokeProps): react_jsx_runtime.JSX.Element;

export { TitleStroke, type TitleStrokeProps };
