export type ColumnAlignment = 'left' | 'center' | 'right';

export type GridColDefs<R> = {
  /**
   * Exclude symbol type
   */
  readonly field: keyof R & string;
  readonly headerName?: string;
  /**
   * Set column alignment
   * @default 'left'
   */
  readonly align?: ColumnAlignment;
};
