import { InputHTMLAttributes } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type RadioOption = {
    label: string;
    value: string;
    disabled?: boolean;
};
export type RadioGroupProps = {
    label: string;
    options: RadioOption[];
    error?: string;
    colorScheme?: ColorScheme;
    className?: string;
    orientation?: 'vertical' | 'horizontal';
} & InputHTMLAttributes<HTMLInputElement>;
export declare function RadioGroup({ className, label, options, error, colorScheme, orientation, ...props }: RadioGroupProps): import("react").JSX.Element;
