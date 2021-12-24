import { useState, VFC } from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'

import Select from './'
import { COLOR } from 'src/theme/constants'

export default {
  title: 'form/Select',
  component: Select,
} as Meta

const Template: VFC = () => {
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
  background-color: ${COLOR.GRAY};
`

export const Default = Template.bind({})
