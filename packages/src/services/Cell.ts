import { WireGridCell } from "../shared/types/cell";

export const renderCellValue = (value: WireGridCell) => {
    return typeof value === "boolean" ? value.toString() : value;
};
