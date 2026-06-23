import { Ref, SelectHTMLAttributes } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type OptionValue = string | number;
export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> & {
    ref?: Ref<HTMLSelectElement>;
    label: string;
    error?: string;
    colorScheme?: ColorScheme;
    isRequired?: boolean;
    placeholder?: string;
    multiple?: boolean;
    selectAll?: boolean;
    searchable?: boolean;
    loading?: boolean;
    defaultValue?: OptionValue | OptionValue[];
    value?: OptionValue | OptionValue[];
};
export declare function Select({ className, label, error, colorScheme, isRequired, placeholder, multiple, selectAll, searchable, loading, children, onChange, disabled, defaultValue, value, name, id, ref }: SelectProps): import("react").JSX.Element;
