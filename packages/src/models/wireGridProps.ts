import type { BaseRowModel, GridRowModel } from './rows';
import type { DefaultColumnModel } from './columns';

export interface WireGridProps<R extends BaseRowModel = BaseRowModel> {
  readonly rowData: readonly GridRowModel<R>[];
  readonly colDefs: readonly DefaultColumnModel<R>[];
}
