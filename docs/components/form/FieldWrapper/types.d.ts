import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { ColorScheme } from '../../../types';
export type FormFieldProps = {
    label: string;
    error?: string;
    colorScheme?: ColorScheme;
    isRequired?: boolean;
};
export type FieldWrapperProps = FormFieldProps & {
    htmlFor?: string;
    children: ReactNode;
};
