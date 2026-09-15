import { SelectHTMLAttributes, Ref } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { FormFieldProps } from '../FieldWrapper/types';
export type OptionValue = string | number;
export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'> & FormFieldProps & {
    ref?: Ref<HTMLSelectElement>;
    placeholder?: string;
    multiple?: boolean;
    selectAll?: boolean;
    searchable?: boolean;
    loading?: boolean;
    defaultValue?: OptionValue | OptionValue[];
    value?: OptionValue | OptionValue[];
};
