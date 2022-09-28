import { Meta } from '@storybook/react/types-6-0'

import { Mail } from './'

export default {
  title: 'icon/Mail',
  component: Mail,
} as Meta

const Template = () => <Mail size={50} />

export const Default = Template.bind({})
