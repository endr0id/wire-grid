import type { GridValue } from "../models";

export const renderCellValue = (value: GridValue) => {
    if (typeof value === "boolean") return value.toString();
    if (value instanceof Date) return value.toLocaleDateString();
    return value;
};
