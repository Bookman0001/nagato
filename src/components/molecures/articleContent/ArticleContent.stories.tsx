import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { ArticleContent } from './'

import { Article } from 'src/types'

export default {
  title: 'ArticleContent',
  component: ArticleContent,
} as Meta

const article: Article = {
  id: '1',
  publishedAt: '2021/05/03',
  title: 'タイトル',
  description: 'ここは概要を表示します',
  content: 'サンプルサンプルサンプルサンプル',
}

const Template: Story = () => <ArticleContent article={article} />

export const Default = Template.bind({})
