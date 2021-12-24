import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import MyIcon from './'

export default {
  title: 'icon/MyIcon',
  component: MyIcon,
} as Meta

const Template: VFC = () => <MyIcon size={50} />

export const Default = Template.bind({})
