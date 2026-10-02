import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'
import { Button } from './button'

const meta = {
  component: Card,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Workspace invite</CardTitle>
        <CardDescription>Invite teammates to collaborate on this project.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">You can change permissions later.</p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Send invite</Button>
      </CardFooter>
    </Card>
  ),
}

export const Compact: Story = {
  render: () => (
    <Card className="w-[300px]" size="sm">
      <CardHeader>
        <CardTitle>Compact card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Uses the small spacing scale.</p>
      </CardContent>
    </Card>
  ),
}
