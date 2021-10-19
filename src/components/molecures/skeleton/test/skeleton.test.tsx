/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme'

import Skeleton from '../'

test('Skeleton', () => {
  const component = shallow(<Skeleton />)
  expect(component).toMatchSnapshot()
})
