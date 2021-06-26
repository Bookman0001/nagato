import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import Pagination from './'

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta

const Template: React.VFC<{}> = () => (
  <>
    総件数50件で10件ずつの時
    <Pagination
      totalCount={50}
      initialIndex={1}
      limit={10}
      onClick={action('clicked')}
    />
  </>
)

export const Default = Template.bind({})
