import { Meta } from '@storybook/react/types-6-0'

import { Title } from './'

export default {
  title: 'Title',
  component: Title,
} as Meta

const Template = () => <Title>タイトルをここに入れます</Title>

export const Default = Template.bind({})
