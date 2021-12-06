import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import Button from './'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story = (args) => (
  <Button onClick={action('clicked')} {...args}>
    ボタン
  </Button>
)

const DisabledButton: Story = (args) => (
  <Button onClick={action('clicked')} disabled {...args}>
    ボタン
  </Button>
)

export const Default = Template.bind({})

export const Disabled = DisabledButton.bind({})
