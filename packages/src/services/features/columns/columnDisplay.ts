import { TextAlignment } from '../../../constants/alignment';
import { ColumnAlignment } from '../../../models/columns';

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
  align: ColumnAlignment = TextAlignment.Left,
): React.CSSProperties['textAlign'] {
  if (
    align === TextAlignment.Center ||
    align === TextAlignment.Left ||
    align === TextAlignment.Right
  ) {
    return align;
  }
  return TextAlignment.Left;
}
