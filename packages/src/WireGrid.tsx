import React from 'react';
import type { WireGridProps } from './models/wireGridProps';
import type { DefaultRowModel } from './models/rows';

const borderColor: string = '#e0e0e0';

const border: string = `1px solid ${borderColor}`;

const wrapper: React.CSSProperties = {
  display: 'grid',
  border: border,
  borderRadius: '5px',
};

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
      {colDefs.map((column, colIndex) => (
        <div key={colIndex} style={{ ...columnHeader }}>
          {column.headerName ?? column.field}

          {colIndex !== colDefs.length - 1 && <div style={{ ...divider }} />}
        </div>
      ))}
      {rowData.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {colDefs.map((column, colIndex) => (
            <div
              key={colIndex}
              style={{
                padding: '8px',
                borderBottom: rowIndex === rowData.length - 1 ? 'none' : border,
              }}
            >
              {row[column.field] ?? '-'}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
