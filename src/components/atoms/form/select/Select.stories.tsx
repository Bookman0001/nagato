import { Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'
import styled from 'styled-components'

import { Select } from './'

import { color } from 'src/theme/constants'

export default {
  title: 'form/Select',
  component: Select,
} as Meta

const Template = () => {
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
      <Value>選択値: {value}</Value>
    </div>
  )
}

const Container = styled.div`
  padding: 20px 0;
`

const Value = styled.div`
  color: ${color.BLACK};
  background-color: ${color.GRAY};
`

export const Default = Template.bind({})
