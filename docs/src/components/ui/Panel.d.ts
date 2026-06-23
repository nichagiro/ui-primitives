import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { ColorScheme } from '../../types';
export type PanelProps = {
    colorScheme?: ColorScheme;
    variant?: 'solid' | 'soft';
    title?: string;
    children: ReactNode;
    className?: string;
};
export declare function Panel({ colorScheme, variant, title, children, className }: PanelProps): import("react").JSX.Element;
