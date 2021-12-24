import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Title from './'

export default {
  title: 'Title',
  component: Title,
} as Meta

const Template: VFC = () => <Title>タイトルをここに入れます</Title>

export const Default = Template.bind({})
