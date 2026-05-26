import * as react_jsx_runtime from 'react/jsx-runtime';

interface OutlineRailItem {
    id: string;
    major?: boolean;
}
declare function OutlineRail({ items, activeId, onSelect, }: {
    items: OutlineRailItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
}): react_jsx_runtime.JSX.Element;

export { OutlineRail, type OutlineRailItem };
