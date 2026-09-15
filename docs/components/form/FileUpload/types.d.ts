import { InputHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { FormFieldProps } from '../FieldWrapper/types';
export type FileUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'children'> & FormFieldProps & {
    ref?: Ref<HTMLInputElement>;
    multiple?: boolean;
    maxSize?: number;
    files?: File[];
    onFilesChange?: (files: File[]) => void;
};
