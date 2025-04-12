import { DefaultColumnModel } from '../../models/columns';
import { DefaultRowModel } from '../../models/rows';

const borderColor: string = '#e0e0e0';
const border: string = `1px solid ${borderColor}`;
const columnHeader: React.CSSProperties = {
  position: 'relative',
  padding: '8px',
  fontWeight: 'bold',
  borderBottom: border,
};
const divider: React.CSSProperties = {
  position: 'absolute',
  top: '6px',
  right: '0px',
  bottom: '6px',
  width: '1px',
  backgroundColor: borderColor,
};

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
          {column.headerName ?? column.field}
          {colIndex === colDefs.length - 1 && <div style={{ ...divider }} />}
        </div>
      ))}
    </>
  );
};
