import { InputHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type FileUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'children'> & {
    ref?: Ref<HTMLInputElement>;
    label: string;
    required?: boolean;
    error?: string;
    colorScheme?: ColorScheme;
    multiple?: boolean;
    maxSize?: number;
    files?: File[];
    onFilesChange?: (files: File[]) => void;
};
export declare function FileUpload({ label, required, error: externalError, colorScheme, maxSize, files: controlledFiles, onFilesChange, className, onChange: onChangeProp, onBlur: onBlurProp, ref, ...props }: FileUploadProps): import("react").JSX.Element;
