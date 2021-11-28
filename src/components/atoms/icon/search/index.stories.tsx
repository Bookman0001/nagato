import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import SearchIcon from './'

export default {
  title: 'icon/SearchIcon',
  component: SearchIcon,
} as Meta

const Template: React.VFC<{}> = () => <SearchIcon size={50} />

export const Default = Template.bind({})
