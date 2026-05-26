import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: ReactNode;
}
declare function Breadcrumb({ items }: {
    items: BreadcrumbItem[];
}): react_jsx_runtime.JSX.Element;

export { Breadcrumb, type BreadcrumbItem };
