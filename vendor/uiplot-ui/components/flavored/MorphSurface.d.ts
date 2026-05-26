import * as react_jsx_runtime from 'react/jsx-runtime';

interface MorphSurfaceProps {
    /** Label shown beside the dot. */
    label?: string;
    /** Text on the right-side trigger button. */
    trigger?: string;
    /** Textarea placeholder. */
    placeholder?: string;
    /** Called with the message when submitted. */
    onSubmit?: (message: string) => void | Promise<void>;
    /** Auto-toggle for demo purposes (pauses on hover). */
    demoMode?: boolean;
}
declare function MorphSurface({ label, trigger, placeholder, onSubmit, demoMode, }: MorphSurfaceProps): react_jsx_runtime.JSX.Element;

export { MorphSurface, type MorphSurfaceProps };
