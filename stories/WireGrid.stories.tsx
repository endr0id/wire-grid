import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { WireGrid } from "../packages/src/index";

const meta: Meta<typeof WireGrid> = {
    title: "Components/WireGrid",
    component: WireGrid,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WireGrid>;

export const Default: Story = {
    render: (args) => {
        const [data, setData] = useState(args.data);

        return <WireGrid data={data} />;
    },
    args: {
        data: [
            { name: "Alice", age: 25, isBool: false, update_on: new Date() },
            { name: "John", age: 30, isBool: false, update_on: new Date() },
            { name: "Beckman", age: 35, isBool: true, update_on: new Date() },
        ],
    },
};
