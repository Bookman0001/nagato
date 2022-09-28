import { Meta } from '@storybook/react/types-6-0'

import { Spinner } from './'

export default {
  title: 'icon/Spinner',
  component: Spinner,
} as Meta

const Template = () => <Spinner />

export const Default = Template.bind({})
