import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import MainTitle from './'

export default {
  title: 'MainTitle',
  component: MainTitle,
} as Meta

const Template: React.VFC<{}> = () => (
  <MainTitle>メインタイトルをここに入れます</MainTitle>
)

export const Default = Template.bind({})
