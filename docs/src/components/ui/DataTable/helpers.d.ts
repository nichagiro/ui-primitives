import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import { Column } from './types';
import { ColorScheme } from '../../../types';
export declare function cn(...classes: (string | boolean | null | undefined)[]): string;
export declare function getValue<T>(row: T, col: Column<T>): ReactNode;
export declare function getRowBg(idx: number, isSelected: boolean, striped: boolean, colorScheme: ColorScheme): string;
