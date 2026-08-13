import { CellValue, ColumnEditor } from './types';
import { ColorScheme } from '../../../types';
type CellEditorProps = {
    editor: ColumnEditor;
    value: CellValue;
    colorScheme: ColorScheme;
    onCommit: (value: CellValue) => void;
    onCancel: () => void;
};
export declare function CellEditor({ editor, value, colorScheme, onCommit, onCancel }: CellEditorProps): import("react").JSX.Element;
export {};
