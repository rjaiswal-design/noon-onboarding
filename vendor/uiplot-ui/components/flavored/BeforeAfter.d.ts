import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface BeforeAfterProps {
    before: ReactNode;
    after: ReactNode;
    defaultSplit?: number;
    height?: number;
}
declare function BeforeAfter({ before, after, defaultSplit, height, }: BeforeAfterProps): react_jsx_runtime.JSX.Element;

export { BeforeAfter, type BeforeAfterProps };
