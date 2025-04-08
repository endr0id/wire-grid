export type GridValue = string | number | boolean | Date;

export interface WireGridProps {
    rows: { [key: string]: GridValue }[];
}
