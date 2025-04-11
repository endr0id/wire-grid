import React, { useMemo } from 'react';
import type { WireGridProps } from './models/wireGridProps';
import type { DefaultRowModel } from './models/rows';

export const WireGrid = <R extends DefaultRowModel>({
  rowData,
  colDefs,
}: WireGridProps<R>) => {
  return (
    <div>
      {rowData.map((row, rowIndex) => (
        <div key={rowIndex}>
          {colDefs.map((column, colIndex) => (
            <span key={colIndex}>{row[column.field] ?? '-'}</span>
          ))}
        </div>
      ))}
    </div>
  );
};
