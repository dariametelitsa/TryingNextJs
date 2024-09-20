import { Meta, StoryObj } from "@storybook/react";
import { Select } from "@/components/ui/select/select";

const meta = {
    component: Select
} satisfies Meta<typeof Select>

export default meta;

type Story =StoryObj<typeof meta>

export const DefaultSelect: Story = {
    args: {
    }
}
