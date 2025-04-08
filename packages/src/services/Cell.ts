import type { WireGridCell } from "../shared/interface";

export const renderCellValue = (value: WireGridCell) => {
    return typeof value === "boolean" ? value.toString() : value;
};
