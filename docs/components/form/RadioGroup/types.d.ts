import { InputHTMLAttributes } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { FormFieldProps } from '../FieldWrapper/types';
export type RadioOption = {
    label: string;
    value: string;
    disabled?: boolean;
};
export type RadioGroupProps = InputHTMLAttributes<HTMLInputElement> & FormFieldProps & {
    options: RadioOption[];
    orientation?: 'vertical' | 'horizontal';
};
