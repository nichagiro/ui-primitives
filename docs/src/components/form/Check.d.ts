import { InputHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type CheckProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>;
    label: string;
    required?: boolean;
    error?: string;
    variant?: 'checkbox' | 'switch';
    colorScheme?: ColorScheme;
};
export declare function Check({ className, label, required, error, variant, colorScheme, ref, ...props }: CheckProps): import("react").JSX.Element;
