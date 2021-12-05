import React from 'react'

import { Meta } from '@storybook/react/types-6-0'
import Icon from 'src/components/atoms/icon/mail'
import Label from './'

export default {
  title: 'form/Label',
  component: Label,
} as Meta

const Template: React.VFC<{}> = () => {
  return (
    <div>
      <Label>フォーム要素上部に表示するラベル要素</Label>
    </div>
  )
}

const IconChildren: React.VFC<{}> = () => {
  return (
    <div>
      <Label>
        <>
          SVGアイコン付き
          <Icon size={16} />
        </>
      </Label>
    </div>
  )
}

export const Default = Template.bind({})

export const WithIcon = IconChildren.bind({})
