export type GridValue = string | number | boolean | Date;

export interface WireGridProps {
    data: { [key: string]: GridValue }[];
}
