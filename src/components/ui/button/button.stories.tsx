import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button/button";

const meta = {
    component: Button
} satisfies Meta<typeof Button>

export default meta;

type Story =StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'He he he',
        onClick: () => alert('hey'),
        title: 'Click here'
    }
}

export const Secondary: Story = {
    args: {
        ...Primary.args,
        variant: 'secondary',
    }
}

export const AsLink: Story = {
    args: {
        ...Primary.args,
        variant: 'secondary',
        asChild: true,
        children: <a href={'/'}>Go Home</a>
    }
}
