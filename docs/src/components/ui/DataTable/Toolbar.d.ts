import { ColorScheme } from '../../../types';
type ToolbarProps = {
    searchable: boolean;
    search: string;
    searchPlaceholder: string;
    onSearchChange: (value: string) => void;
    showPageSize: boolean;
    pageSize: number;
    onPageSizeChange: (size: number) => void;
    colorScheme: ColorScheme;
};
export declare function Toolbar({ searchable, search, searchPlaceholder, onSearchChange, showPageSize, pageSize, onPageSizeChange, colorScheme, }: ToolbarProps): import("react").JSX.Element;
export {};
