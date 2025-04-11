import React, { useState } from 'react';
import { WireGrid } from '../packages/src';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WireGrid> = {
  title: 'WireGrid',
  component: WireGrid,
};

export default meta;

type Story = StoryObj<typeof WireGrid>;

type SampleRowModel = {
  name: string;
  age: number;
  email: string;
  employee: boolean;
};

export const Default: Story = {
  render: (args: any) => {
    const [rows, setRows] = useState<SampleRowModel[]>(args.rowData);
    const [columns, setColumns] = useState(args.colDefs);

    return <WireGrid rowData={rows} colDefs={columns} />;
  },
  args: {
    rowData: [
      {
        name: 'Alice',
        age: 20,
        email: 'test@something.co.jp',
        employee: true,
        // update_on: new Date(),
      },
    ],
    colDefs: [
      { field: 'name' },
      { field: 'age' },
      { field: 'email' },
      { field: 'employee' },
      { field: 'update_on' },
    ],
  },
};
