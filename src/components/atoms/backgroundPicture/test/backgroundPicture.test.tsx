import { shallow } from 'enzyme'

import BackgroundPicture from '../'

test('BackgroundPicture', () => {
  const component = shallow(
    <BackgroundPicture alt={'test'} src={'https://placehold.jp/150x150.png'} />
  )
  expect(component).toMatchSnapshot()
})
