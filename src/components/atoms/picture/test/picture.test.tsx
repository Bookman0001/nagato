import { shallow } from 'enzyme'

import Picture from '../'

test('Picture', () => {
  const component = shallow(
    <Picture
      src="https://placehold.jp/150x150.png"
      alt="test"
      width={150}
      height={150}
    />
  )
  expect(component).toMatchSnapshot()
})
