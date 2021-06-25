import { shallow } from 'enzyme'

import SearchInput from '../'

test('SearchInput', () => {
  const component = shallow(
    <SearchInput
      defaultValue={''}
      placeholder={'test'}
      onChange={(e) => console.log(e.target.value)}
    />
  )
  expect(component).toMatchSnapshot()
})
