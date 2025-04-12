import type { WireGridProps } from './models/wireGridProps';
import type { DefaultRowModel } from './models/rows';
import { ColumnHeader } from './components/columns/ColumnHeader';
import { DataRows } from './components/rows/DataRows';
import { wrapper } from './styles/WireGrid.styles';

export const WireGrid = <R extends DefaultRowModel>({
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
