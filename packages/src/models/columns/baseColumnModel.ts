export type DefaultColumnModel<R> = {
  /**
   * Exclude symbol type
   */
  field: keyof R & string;
  headerName?: string;
};
