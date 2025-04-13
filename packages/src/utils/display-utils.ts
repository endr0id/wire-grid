import { ColumnPositionValue } from '../models/columns';

export function getHeaderLabel(
  field: string | number | symbol,
  headerName?: string,
): string {
  return headerName ?? String(field);
}

export function getCellValue<R>(row: R, field: keyof R) {
  const value = row[field];
  return value ?? '-';
}

export function getTextAlign(
  position?: ColumnPositionValue,
): React.CSSProperties['textAlign'] {
  switch (position) {
    case 'center':
    case 'left':
    case 'right':
      return position;
    default:
      return 'left';
  }
}
