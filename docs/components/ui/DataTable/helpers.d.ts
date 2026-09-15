import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { Column, Density } from './types';
import { ColorScheme } from '../../../types';
export declare function estimateRowHeight(density: Density): number;
export declare function getValue<T>(row: T, col: Column<T>): ReactNode;
export declare function getRowBg(idx: number, isSelected: boolean, striped: boolean, colorScheme: ColorScheme): string;
export declare const editBaseClass: string;
export declare function getEditClass(colorScheme: ColorScheme): string;
export declare function getEditAccent(colorScheme: ColorScheme): string;
