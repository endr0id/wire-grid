import type { DefaultRowModel, GridRowModel } from './rows';
import type { DefaultColumnModel } from './columns';

export interface WireGridProps<R extends DefaultRowModel = DefaultRowModel> {
  readonly rowData: readonly GridRowModel<R>[];
  readonly colDefs: readonly DefaultColumnModel<R>[];
}
