import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Star from './'

export default {
  title: 'icon/Star',
  component: Star,
} as Meta

const Template: React.VFC<{}> = () => <Star size={30} />

export const Default = Template.bind({})
