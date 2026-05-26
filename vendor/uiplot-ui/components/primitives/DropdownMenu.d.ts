import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface DropdownMenuItem {
    id: string;
    label: string;
    onSelect?: () => void;
    shortcut?: string;
    icon?: ReactNode;
    destructive?: boolean;
    disabled?: boolean;
}
interface DropdownMenuProps {
    trigger: ReactNode;
    items: (DropdownMenuItem | "separator")[];
    width?: number;
}
declare function DropdownMenu({ trigger, items, width }: DropdownMenuProps): react_jsx_runtime.JSX.Element;

export { DropdownMenu, type DropdownMenuItem, type DropdownMenuProps };
