import { TextareaHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { FormFieldProps } from '../FieldWrapper/types';
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & FormFieldProps & {
    ref?: Ref<HTMLTextAreaElement>;
    resize?: 'none' | 'vertical' | 'both';
};
