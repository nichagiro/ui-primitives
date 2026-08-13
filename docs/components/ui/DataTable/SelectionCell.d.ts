import { ColorScheme } from '../../../types';
type SelectionCellProps = {
    mode: 'checkbox' | 'radio';
    isSelected: boolean;
    colorScheme: ColorScheme;
};
export declare function SelectionCell({ mode, isSelected, colorScheme }: SelectionCellProps): import("react").JSX.Element;
export {};
