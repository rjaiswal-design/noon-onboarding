import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface AlertDialogProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    destructive?: boolean;
    children?: ReactNode;
}
declare function AlertDialog({ open, onClose, title, description, confirmLabel, cancelLabel, onConfirm, destructive, children, }: AlertDialogProps): react_jsx_runtime.JSX.Element | null;

export { AlertDialog, type AlertDialogProps };
