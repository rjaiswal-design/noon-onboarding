import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    width?: number | string;
}
declare function Modal({ open, onClose, title, children, width }: ModalProps): react_jsx_runtime.JSX.Element | null;

export { Modal, type ModalProps };
