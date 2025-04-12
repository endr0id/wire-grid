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
