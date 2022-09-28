import { Meta } from '@storybook/react/types-6-0'

import { Circle } from './'

export default {
  title: 'icon/Circle',
  component: Circle,
} as Meta

const Template = () => <Circle size={12} />

export const Default = Template.bind({})
