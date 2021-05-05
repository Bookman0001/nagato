import { shallow } from 'enzyme'

import Title from '../'

test('Title', () => {
  const component = shallow(<Title>test</Title>)
  expect(component).toMatchSnapshot()
})
