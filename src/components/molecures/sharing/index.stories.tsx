import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Sharing from './'

export default {
  title: 'Sharing',
  component: Sharing,
} as Meta

const Template: Story = () => <Sharing />

export const Default = Template.bind({})
