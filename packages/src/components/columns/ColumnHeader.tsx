import { DefaultColumnModel } from '../../models/columns';
import { BaseRowModel } from '../../models/rows';
import { columnHeader, divider } from '../../styles/WireGrid.styles';
import { getHeaderLabel, getTextAlign } from '../../utils/display-utils';

type Props<R extends BaseRowModel> = {
  colDefs: readonly DefaultColumnModel<R>[];
};

export const ColumnHeader = <R extends BaseRowModel>({ colDefs }: Props<R>) => {
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
