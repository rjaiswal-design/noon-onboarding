import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface CommandItem {
    id: string;
    label: string;
    group?: string;
    shortcut?: string;
    icon?: ReactNode;
    onSelect?: () => void;
    keywords?: string[];
}
interface CommandProps {
    open: boolean;
    onClose: () => void;
    items: CommandItem[];
    placeholder?: string;
}
declare function Command({ open, onClose, items, placeholder, }: CommandProps): react_jsx_runtime.JSX.Element | null;

export { Command, type CommandItem, type CommandProps };
