import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import MailIcon from './'

export default {
  title: 'icon/MailIcon',
  component: MailIcon,
} as Meta

const Template: React.VFC<{}> = () => <MailIcon size={50} />

export const Default = Template.bind({})
