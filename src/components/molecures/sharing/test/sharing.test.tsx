/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme'

import Sharing from '../'

test('Sharing', () => {
  const component = shallow(<Sharing />)
  expect(component).toMatchSnapshot()
})
