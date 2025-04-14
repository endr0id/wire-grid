import React from 'react';
import { GridColDefs } from '../../models/columns';
import { BaseRowModel, GridRowModel } from '../../models/rows';
import {
  getCellValue,
  getTextAlign,
} from '../../services/features/columns/columnDisplay';
import { border } from '../../styles/WireGrid.styles';

type Props<R extends BaseRowModel> = {
  rowData: readonly GridRowModel<R>[];
  colDefs: readonly GridColDefs<R>[];
};

export const DataRows = <R extends BaseRowModel>({
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
