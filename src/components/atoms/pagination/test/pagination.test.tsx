import { shallow } from 'enzyme'

import Pagination from '../'

test('Pagination', () => {
  const component = shallow(
    <Pagination
      totalCount={10}
      limit={5}
      onClick={() => console.log('clicked')}
    />
  )
  expect(component).toMatchSnapshot()
})
