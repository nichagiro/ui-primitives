import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
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
    actions?: ReactNode;
};
export declare function Toolbar({ searchable, search, searchPlaceholder, onSearchChange, showPageSize, pageSize, onPageSizeChange, colorScheme, actions, }: ToolbarProps): import("react").JSX.Element;
export {};
