import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Rectangle from './'

export default {
  title: 'icon/Rectangle',
  component: Rectangle,
} as Meta

const Template: React.VFC<{}> = () => <Rectangle size={50} />

export const Default = Template.bind({})
