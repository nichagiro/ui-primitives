export type SelectDropdownPosition = {
    top: number | string;
    bottom: number | string;
    left: number;
    width: number;
    maxHeight: number;
};
export declare function calcDropdownPosition(container: HTMLElement | null): SelectDropdownPosition | null;
