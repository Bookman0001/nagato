import { shallow } from 'enzyme'

import Button from '../'

test('Button', () => {
  const component = shallow(
    <Button onClick={() => console.log('clicked')} text={'test'} />
  )
  expect(component).toMatchSnapshot()
})
