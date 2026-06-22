import { TextareaHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    ref?: Ref<HTMLTextAreaElement>;
    label: string;
    required?: boolean;
    error?: string;
    colorScheme?: ColorScheme;
    resize?: 'none' | 'vertical' | 'both';
};
export declare function TextArea({ className, label, required, error, colorScheme, resize, ref, ...props }: TextAreaProps): import("react").JSX.Element;
