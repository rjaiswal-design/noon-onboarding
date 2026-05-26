import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface ToggleGroupItem {
    value: string;
    label: ReactNode;
}
interface ToggleGroupProps {
    items: ToggleGroupItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (next: string) => void;
}
declare function ToggleGroup({ items, value, defaultValue, onChange, }: ToggleGroupProps): react_jsx_runtime.JSX.Element;

export { ToggleGroup, type ToggleGroupItem, type ToggleGroupProps };
