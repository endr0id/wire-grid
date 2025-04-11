import type { DefaultRowModel, GridRowModel } from './rows';
import type { DefaultColumnModel } from './columns';

export interface WireGridProps<R extends DefaultRowModel = DefaultRowModel> {
  rowData: readonly GridRowModel<R>[];
  colDefs: readonly DefaultColumnModel<R>[];
}
