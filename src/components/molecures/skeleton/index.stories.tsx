import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Skeleton from './'

export default {
  title: 'Skeleton',
  component: Skeleton,
} as Meta

const Template: Story = () => <Skeleton />

export const Default = Template.bind({})
