import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Breadcrumb from './'
import { BreadcrumbContents } from 'src/types'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
} as Meta

const contents: BreadcrumbContents = [
  { label: 'TOP', link: '/' },
  { label: 'SECOND', link: '/' },
  { label: 'THIRD', link: '/' },
]

const Template: React.VFC<{}> = () => (
  <div>
    <Breadcrumb contents={contents} />
  </div>
)

export const Default = Template.bind({})
