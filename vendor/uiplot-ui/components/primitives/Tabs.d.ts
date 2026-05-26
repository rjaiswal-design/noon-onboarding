import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
}
declare function Tabs({ items, defaultId }: {
    items: TabItem[];
    defaultId?: string;
}): react_jsx_runtime.JSX.Element;

export { type TabItem, Tabs };
