import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'

import Select from './'

export default {
  title: 'Select',
  component: Select,
} as Meta

const Template: React.VFC<{}> = () => {
  const [value, setValue] = useState<string>('option1')

  return (
    <div>
      <Container>
        <Select defaultValue={''} onChange={(e) => setValue(e.target.value)}>
          <>
            <option>Option1</option>
            <option>Option2</option>
          </>
        </Select>
      </Container>
      選択値: {value}
    </div>
  )
}

const Container = styled.div`
  padding: 20px 0;
`

export const Default = Template.bind({})
