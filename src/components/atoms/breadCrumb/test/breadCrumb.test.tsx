import { shallow } from 'enzyme'

import BreadCrumb from '../'

test('BreadCrumb', () => {
  const component = shallow(
    <BreadCrumb
      contents={[
        { label: 'TOP', link: '/' },
        { label: 'SECOND', link: '/' },
        { label: 'THIRD', link: '/' },
      ]}
    />
  )
  expect(component).toMatchSnapshot()
})
