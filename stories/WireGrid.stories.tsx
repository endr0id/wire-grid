import type { Meta, StoryObj } from "@storybook/react";
import { WireGrid } from "../packages/src/components/WireGrid";

const meta: Meta<typeof WireGrid> = {
    title: "Components/Grid",
    component: WireGrid,
    tags: ["autodocs"],
    args: {
        data: [
            { id: 1, name: "Alice", age: 25, isBool: true },
            { id: 2, name: "Alice", age: 30, isBool: false },
            { id: 3, name: "Alice", age: 35, isBool: true },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof WireGrid>;

export const Default: Story = {};
