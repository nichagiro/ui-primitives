import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { ColorScheme } from '../../../types';
import { OptionValue } from './types';
type SelectOptionsListProps = {
    loading: boolean;
    filteredOptions: {
        value: OptionValue;
        label: ReactNode;
    }[];
    showSelectAll: boolean;
    filteredAllSelected: boolean;
    highlightedIndex: number;
    colorScheme: ColorScheme;
    currentValues: OptionValue[];
    multiple: boolean;
    searchQuery: string;
    filteredAllValues: OptionValue[];
    onSelectAll: () => void;
    onOptionClick: (value: OptionValue) => void;
    onHighlight: (index: number) => void;
};
export declare function SelectOptionsList({ loading, filteredOptions, showSelectAll, filteredAllSelected, highlightedIndex, colorScheme, currentValues, multiple, searchQuery, filteredAllValues, onSelectAll, onOptionClick, onHighlight, }: SelectOptionsListProps): import("react").JSX.Element;
export {};
