import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface AccordionItem {
    id: string;
    title: string;
    content: ReactNode;
}
interface AccordionProps {
    items: AccordionItem[];
    defaultOpen?: string[];
    multiple?: boolean;
}
declare function Accordion({ items, defaultOpen, multiple }: AccordionProps): react_jsx_runtime.JSX.Element;

export { Accordion, type AccordionItem, type AccordionProps };
