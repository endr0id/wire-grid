import type { Meta, StoryObj } from "@storybook/react";
import { WireGrid } from "../packages/src/index";

const meta: Meta<typeof WireGrid> = {
    title: "Components/WireGrid",
    component: WireGrid,
    tags: ["autodocs"],
    args: {
        data: [
            { name: "Alice", age: 25 },
            { name: "John", age: 30 },
            { name: "Beckman", age: 35 },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof WireGrid>;

export const Default: Story = {};
