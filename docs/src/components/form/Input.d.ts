import { InputHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>;
    label: string;
    error?: string;
    colorScheme?: ColorScheme;
};
export declare function Input({ className, label, error, colorScheme, ref, ...props }: InputProps): import("react").JSX.Element;
