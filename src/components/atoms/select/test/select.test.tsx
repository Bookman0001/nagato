import { shallow } from 'enzyme'

import Select from '../'

test('SearchInput', () => {
  const component = shallow(
    <Select defaultValue={''} onChange={(e) => console.log(e.target.value)}>
      <>
        <option>Option1</option>
      </>
    </Select>
  )
  expect(component).toMatchSnapshot()
})
