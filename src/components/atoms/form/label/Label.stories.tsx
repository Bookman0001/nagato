import { Meta } from '@storybook/react/types-6-0'

import { Label } from './'

import { Mail } from 'src/components/atoms/icon'

export default {
  title: 'form/Label',
  component: Label,
} as Meta

const Template = () => {
  return (
    <div>
      <Label>フォーム要素上部に表示するラベル要素</Label>
    </div>
  )
}

const IconChildren = () => {
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
