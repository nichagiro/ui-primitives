import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';
export type AlertProps = {
    variant?: AlertVariant;
    title?: string;
    children: ReactNode;
    dismissible?: boolean;
    className?: string;
};
export declare function Alert({ variant, title, children, dismissible, className }: AlertProps): import("react").JSX.Element | null;
