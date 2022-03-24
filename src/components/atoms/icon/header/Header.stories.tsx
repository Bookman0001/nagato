import { Meta } from '@storybook/react/types-6-0'
import { VFC } from 'react'

import { Header } from './'

export default {
  title: 'icon/Header',
  component: Header,
} as Meta

const Template: VFC = () => <Header />

export const Default = Template.bind({})
