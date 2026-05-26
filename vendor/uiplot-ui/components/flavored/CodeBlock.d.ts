import * as react_jsx_runtime from 'react/jsx-runtime';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}
declare function CodeBlock({ code, language, filename }: CodeBlockProps): react_jsx_runtime.JSX.Element;

export { CodeBlock, type CodeBlockProps };
