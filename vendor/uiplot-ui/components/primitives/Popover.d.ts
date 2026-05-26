import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

type Placement = "bottom" | "top" | "bottom-start" | "bottom-end";
interface PopoverProps {
    trigger: ReactNode;
    children: ReactNode;
    placement?: Placement;
    offset?: number;
    width?: number | "trigger";
    open?: boolean;
    onOpenChange?: (next: boolean) => void;
    contentStyle?: CSSProperties;
}
declare function Popover({ trigger, children, placement, offset, width, open: controlled, onOpenChange, contentStyle, }: PopoverProps): react_jsx_runtime.JSX.Element;

export { Popover, type PopoverProps };
