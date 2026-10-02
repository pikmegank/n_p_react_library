import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Save changes',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: /save changes/i })
    await userEvent.click(button)
    await expect(meta.args?.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete item',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /save changes/i })
    await expect(getComputedStyle(button).backgroundColor).toBe('oklch(0.205 0 0)')
  },
}
