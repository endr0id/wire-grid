import React from 'react';
import type { WireGridProps } from './models/wireGridProps';
import type { DefaultRowModel } from './models/rows';
import { ColumnHeader } from './components/columns/ColumnHeader';
import { DataRows } from './components/rows/DataRows';

const borderColor: string = '#e0e0e0';
const border: string = `1px solid ${borderColor}`;
const wrapper: React.CSSProperties = {
  display: 'grid',
  border: border,
  borderRadius: '5px',
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
      <ColumnHeader colDefs={colDefs} />
      <DataRows rowData={rowData} colDefs={colDefs} />
    </div>
  );
};
