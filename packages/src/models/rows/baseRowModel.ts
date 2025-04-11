export type DefaultRowModel = {
  [key: string]: any;
};

export type GridRowModel<R extends DefaultRowModel = DefaultRowModel> = R;
