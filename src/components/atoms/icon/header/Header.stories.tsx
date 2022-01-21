import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Header } from './'

export default {
  title: 'icon/Header',
  component: Header,
} as Meta

const Template: VFC = () => <Header />

export const Default = Template.bind({})
