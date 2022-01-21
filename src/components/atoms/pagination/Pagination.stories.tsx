import { useState, VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Pagination } from './'

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta

const Template: VFC = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <>
      総件数50件で10件ずつの時
      <Pagination
        totalCount={50}
        limit={10}
        onClick={(index) => setCount(index)}
        currentIndex={count}
      />
    </>
  )
}

export const Default = Template.bind({})
