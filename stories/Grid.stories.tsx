import type { Meta, StoryObj } from "@storybook/react";
import Grid from "../src/components/Grid";

const meta: Meta<typeof Grid> = {
    title: "Components/Grid",
    component: Grid,
    tags: ["autodocs"],
    args: {
        data: [
            {id: 1, name: "Alice", age: 25},
            {id: 2, name: "Alice", age: 30},
            {id: 3, name: "Alice", age: 35},
        ]
    }
}

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {};