export type WireGridCell = string | number | boolean;

export interface WireGridProps {
    data: { [key: string]: WireGridCell }[];
}
