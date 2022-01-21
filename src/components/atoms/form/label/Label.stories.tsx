import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Mail } from 'src/components/atoms/icon/mail'
import { Label } from './'

export default {
  title: 'form/Label',
  component: Label,
} as Meta

const Template: VFC = () => {
  return (
    <div>
      <Label>フォーム要素上部に表示するラベル要素</Label>
    </div>
  )
}

const IconChildren: VFC = () => {
  return (
    <div>
      <Label>
        <>
          SVGアイコン付き
          <Mail size={16} />
        </>
      </Label>
    </div>
  )
}

export const Default = Template.bind({})

export const WithIcon = IconChildren.bind({})
