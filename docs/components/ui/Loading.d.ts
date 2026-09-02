import { ColorScheme } from '../../types';
export type LoadingVariant = 'spinner' | 'dots' | 'bars';
export type LoadingSize = 'sm' | 'md' | 'lg';
export type LoadingProps = {
    variant?: LoadingVariant;
    colorScheme?: ColorScheme;
    size?: LoadingSize;
    className?: string;
};
export declare function Loading({ variant, colorScheme, size, className }: LoadingProps): import("react").JSX.Element;
