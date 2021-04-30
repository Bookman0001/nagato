import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import BreadCrumb from './'
import { BreadCrumbContents } from 'src/types'

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
} as Meta

const contents: BreadCrumbContents = [
  { label: 'TOP', link: '/' },
  { label: 'SECOND', link: '/' },
  { label: 'THIRD', link: '/' },
]

const Template: React.VFC<{}> = () => (
  <div>
    <BreadCrumb contents={contents} />
  </div>
)

export const Default = Template.bind({})
