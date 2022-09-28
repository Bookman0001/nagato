import { Meta } from '@storybook/react/types-6-0'

import { MainTitle } from './'

export default {
  title: 'MainTitle',
  component: MainTitle,
} as Meta

const Template = () => <MainTitle>メインタイトルをここに入れます</MainTitle>

export const Default = Template.bind({})
