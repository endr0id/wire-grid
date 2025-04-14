import { ColumnPositions } from '../../constants/column';

export type ColumnPositionValue = (typeof ColumnPositions)[number];

export type DefaultColumnModel<R> = {
  /**
   * Exclude symbol type
   */
  readonly field: keyof R & string;
  readonly headerName?: string;
  /**
   * Set column position
   *
   * If you do not specify a position, left will be set as the default
   */
  readonly align?: ColumnPositionValue;
};
