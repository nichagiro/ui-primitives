import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: ModalSize;
    persistent?: boolean;
    className?: string;
};
export declare function Modal({ open, onClose, title, children, footer, size, persistent, className }: ModalProps): import('../../../../node_modules/.pnpm/react@19.2.7/node_modules/react').ReactPortal | null;
