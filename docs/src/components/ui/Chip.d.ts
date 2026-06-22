import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type ChipSize = 'sm' | 'md';
export type ChipProps = {
    variant?: ChipVariant;
    size?: ChipSize;
    children: ReactNode;
    onDismiss?: () => void;
    className?: string;
};
export declare function Chip({ variant, size, children, onDismiss, className }: ChipProps): import("react").JSX.Element;
