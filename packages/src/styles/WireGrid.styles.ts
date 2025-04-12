export const borderColor = '#e0e0e0';

export const border = `1px solid ${borderColor}`;

export const wrapper = {
  display: 'grid',
  border,
  borderRadius: '5px',
} as const;

export const columnHeader = {
  position: 'relative',
  padding: '8px',
  fontWeight: 'bold',
  borderBottom: border,
} as const;

export const divider = {
  position: 'absolute',
  top: '6px',
  right: '0px',
  bottom: '6px',
  width: '1px',
  backgroundColor: borderColor,
} as const;
