import { DefaultColumnModel } from '../../models/columns';
import { DefaultRowModel } from '../../models/rows';
import { columnHeader, divider } from '../../styles/WireGrid.styles';
import { getColumnHeader } from '../../utils/grid';

type Props<R extends DefaultRowModel> = {
  colDefs: readonly DefaultColumnModel<R>[];
};

export const ColumnHeader = <R extends DefaultRowModel>({
  colDefs,
}: Props<R>) => {
  return (
    <>
      {colDefs.map((column, colIndex) => (
        <div key={colIndex} style={columnHeader}>
          {getColumnHeader(column.field, column.headerName)}
          {colIndex === colDefs.length - 1 && <div style={{ ...divider }} />}
        </div>
      ))}
    </>
  );
};
