import { ColorScheme } from '../../../types';
export type ToastEntry = {
    id: string;
    message: string;
    variant: ColorScheme;
    duration: number;
};
export declare function getToasts(): ToastEntry[];
export declare function dismissToast(id: string): void;
export declare function subscribe(fn: () => void): () => void;
export declare const toast: {
    success: (message: string, duration?: number) => string;
    error: (message: string, duration?: number) => string;
    info: (message: string, duration?: number) => string;
    warning: (message: string, duration?: number) => string;
    dismiss: (id: string) => void;
};
