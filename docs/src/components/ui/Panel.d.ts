import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
export type PanelVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type PanelProps = {
    variant?: PanelVariant;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
};
export declare function Panel({ variant, title, children, footer, className }: PanelProps): import("react").JSX.Element;
