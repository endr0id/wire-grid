import type { WireGridProps } from '../models/wireGridProps';
import type { BaseRowModel } from '../models/rows';
import { ColumnHeader } from './columns/ColumnHeader';
import { DataRows } from './rows/DataRows';
import { wrapper } from '../styles/WireGrid.styles';

export const WireGrid = <R extends BaseRowModel>({
  rowData,
  colDefs,
}: WireGridProps<R>) => {
  return (
    <div
      style={{
        ...wrapper,
        gridTemplateColumns: `repeat(${colDefs.length}, 1fr)`,
      }}
    >
      <ColumnHeader colDefs={colDefs} />
      <DataRows rowData={rowData} colDefs={colDefs} />
    </div>
  );
};
