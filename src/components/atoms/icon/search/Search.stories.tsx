import { Meta } from '@storybook/react/types-6-0'

import { Search } from './'

export default {
  title: 'icon/Search',
  component: Search,
} as Meta

const Template = () => <Search size={50} />

export const Default = Template.bind({})
