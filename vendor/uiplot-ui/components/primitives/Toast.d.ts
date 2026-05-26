import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type ToastTone = "neutral" | "accent" | "success" | "danger";
interface ToastItem {
    id: number;
    tone: ToastTone;
    title: string;
    body?: string;
}
declare function ToastProvider({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function useToast(): {
    push: (t: Omit<ToastItem, "id">) => void;
};

export { ToastProvider, useToast };
