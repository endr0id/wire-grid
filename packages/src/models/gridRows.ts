export type GridValue = string | number | boolean;

export interface WireGridProps {
    data: { [key: string]: GridValue }[];
}
