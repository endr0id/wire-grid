import { DefaultColumnModel } from '../../models/columns';
import { DefaultRowModel } from '../../models/rows';
import { columnHeader, divider } from '../../styles/WireGrid.styles';
import { getHeaderLabel, getTextAlign } from '../../utils/display-utils';

type Props<R extends DefaultRowModel> = {
  colDefs: readonly DefaultColumnModel<R>[];
};

export const ColumnHeader = <R extends DefaultRowModel>({
  colDefs,
}: Props<R>) => {
  return (
    <>
      {colDefs.map((column, colIndex) => (
        <div
          key={colIndex}
          style={{ ...columnHeader, textAlign: getTextAlign(column.align) }}
        >
          {getHeaderLabel(column.field, column.headerName)}
          {colIndex !== colDefs.length - 1 && <div style={{ ...divider }} />}
        </div>
      ))}
    </>
  );
};
