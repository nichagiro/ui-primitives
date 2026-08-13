import { ColorScheme } from '../../types';
export type PaginationProps = {
    page: number;
    totalPages: number;
    totalItems: number;
    startRecord: number;
    endRecord: number;
    onPageChange: (page: number) => void;
    colorScheme?: ColorScheme;
};
export declare function Pagination({ page, totalPages, totalItems, startRecord, endRecord, onPageChange, colorScheme }: PaginationProps): import("react").JSX.Element | null;
