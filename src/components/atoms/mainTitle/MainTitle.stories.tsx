import { Meta } from '@storybook/react/types-6-0'
import { VFC } from 'react'

import { MainTitle } from './'

export default {
  title: 'MainTitle',
  component: MainTitle,
} as Meta

const Template: VFC = () => (
  <MainTitle>メインタイトルをここに入れます</MainTitle>
)

export const Default = Template.bind({})
