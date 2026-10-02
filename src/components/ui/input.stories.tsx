import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import { Input } from './input'

const meta = {
  component: Input,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
  args: {
    'aria-label': 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {}

export const Filled: Story = {
  args: {
    defaultValue: 'hello@example.com',
  },
}

export const CanBeTypedInto: Story = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox', { name: /email address/i })
    await userEvent.type(input, 'team@example.com')
    await expect(input).toHaveValue('team@example.com')
  },
}
