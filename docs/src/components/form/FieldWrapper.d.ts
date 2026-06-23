import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
interface FieldWrapperProps {
    label: string;
    error?: string;
    htmlFor?: string;
    colorScheme?: ColorScheme;
    children: ReactNode;
}
declare function FieldWrapper({ label, error, htmlFor, colorScheme, children }: FieldWrapperProps): import("react").JSX.Element;
export { FieldWrapper };
export type { FieldWrapperProps };
