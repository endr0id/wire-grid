import type { Meta, StoryObj } from "@storybook/react";
import { WyreGrid } from "../src/components/WyreGrid";

const meta: Meta<typeof WyreGrid> = {
    title: "Components/Grid",
    component: WyreGrid,
    tags: ["autodocs"],
    args: {
        data: [
            { id: 1, name: "Alice", age: 25 },
            { id: 2, name: "Alice", age: 30 },
            { id: 3, name: "Alice", age: 35 },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof WyreGrid>;

export const Default: Story = {};
