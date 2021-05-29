import { shallow } from 'enzyme'

import Breadcrumb from '../'

test('Breadcrumb', () => {
  const component = shallow(
    <Breadcrumb
      contents={[
        { label: 'TOP', link: '/' },
        { label: 'SECOND', link: '/' },
        { label: 'THIRD', link: '/' },
      ]}
    />
  )
  expect(component).toMatchSnapshot()
})
