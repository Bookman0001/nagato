import { Meta } from '@storybook/react/types-6-0'

import { ParagraphContent } from './'

export default {
  title: 'ParagraphContents',
  component: ParagraphContent,
} as Meta

const Template = () => (
  <ParagraphContent>
    ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
  </ParagraphContent>
)

export const Default = Template.bind({})
