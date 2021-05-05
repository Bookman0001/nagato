import { shallow } from 'enzyme'

import MainTitle from '../'

test('MainTitle', () => {
  const component = shallow(<MainTitle>test</MainTitle>)
  expect(component).toMatchSnapshot()
})
