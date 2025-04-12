export type DefaultColumnModel<R> = {
  /**
   * Exclude symbol type
   */
  readonly field: keyof R & string;
  readonly headerName?: string;
};
