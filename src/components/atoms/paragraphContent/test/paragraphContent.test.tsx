import { shallow } from 'enzyme'

import ParagraphContent from '../'

test('ParagraphContent', () => {
  const component = shallow(<ParagraphContent>test</ParagraphContent>)
  expect(component).toMatchSnapshot()
})
