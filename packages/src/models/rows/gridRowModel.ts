export type BaseRowModel = {
  [key: string]: any;
};

export type GridRowModel<R extends BaseRowModel = BaseRowModel> = R;
