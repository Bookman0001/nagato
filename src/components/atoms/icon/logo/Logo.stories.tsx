import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Logo } from './'

export default {
  title: 'icon/Logo',
  component: Logo,
} as Meta

const Template: VFC = () => <Logo size={50} />

export const Default = Template.bind({})
