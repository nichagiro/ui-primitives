import { ButtonHTMLAttributes, ReactNode, Ref } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type ButtonVariant = 'solid' | 'soft' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    ref?: Ref<HTMLButtonElement>;
    variant?: ButtonVariant;
    colorScheme?: ColorScheme;
    size?: ButtonSize;
    loading?: boolean;
    children?: ReactNode;
};
export declare function Button({ variant, colorScheme, size, loading, disabled, className, children, ref, type, ...props }: ButtonProps): import("react").JSX.Element;
