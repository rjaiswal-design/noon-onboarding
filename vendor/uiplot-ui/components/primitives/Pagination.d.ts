import * as react_jsx_runtime from 'react/jsx-runtime';

interface PaginationProps {
    total: number;
    page?: number;
    defaultPage?: number;
    onChange?: (page: number) => void;
    siblings?: number;
}
declare function Pagination({ total, page, defaultPage, onChange, siblings, }: PaginationProps): react_jsx_runtime.JSX.Element;

export { Pagination, type PaginationProps };
