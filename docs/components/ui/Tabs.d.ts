import { ReactNode } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { ColorScheme } from '../../types';
export type TabsVariant = 'underline' | 'pill' | 'cards';
export type TabsItem = {
    value: string;
    label: ReactNode;
    content: ReactNode;
    disabled?: boolean;
};
export type TabsProps = {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    variant?: TabsVariant;
    colorScheme?: ColorScheme;
    tabs: TabsItem[];
    className?: string;
};
export declare function Tabs({ defaultValue, value, onChange, variant, colorScheme, tabs, className }: TabsProps): import("react").JSX.Element;
