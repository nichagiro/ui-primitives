import { InputHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { FormFieldProps } from '../FieldWrapper/types';
export type CheckProps = InputHTMLAttributes<HTMLInputElement> & FormFieldProps & {
    ref?: Ref<HTMLInputElement>;
    variant?: 'checkbox' | 'switch';
};
