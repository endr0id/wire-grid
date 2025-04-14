import React from 'react';
import { DefaultColumnModel } from '../../models/columns';
import { DefaultRowModel, GridRowModel } from '../../models/rows';
import { getCellValue, getTextAlign } from '../../utils/display-utils';
import { border } from '../../styles/WireGrid.styles';

type Props<R extends DefaultRowModel> = {
  rowData: readonly GridRowModel<R>[];
  colDefs: readonly DefaultColumnModel<R>[];
};

export const DataRows = <R extends DefaultRowModel>({
  rowData,
  colDefs,
}: Props<R>) => {
  return (
    <>
      {rowData.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {colDefs.map((column, colIndex) => (
            <div
              key={colIndex}
              style={{
                padding: '8px',
                borderBottom: rowIndex === rowData.length - 1 ? 'none' : border,
                textAlign: getTextAlign(column.align),
              }}
            >
              {getCellValue(row, column.field)}
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
