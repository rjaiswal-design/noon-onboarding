import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type Side = "right" | "left" | "bottom";
interface SheetProps {
    open: boolean;
    onClose: () => void;
    side?: Side;
    width?: number | string;
    height?: number | string;
    title?: string;
    children: ReactNode;
}
declare function Sheet({ open, onClose, side, width, height, title, children, }: SheetProps): react_jsx_runtime.JSX.Element | null;

export { Sheet, type SheetProps };
