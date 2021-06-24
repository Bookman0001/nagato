/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme'

import ArticleContent from '../'
import { Article } from 'src/types'

test('ArticleContent', () => {
  const article: Article = {
    id: '1',
    publishedAt: '2021/05/03',
    title: 'タイトル',
    description: 'ここは概要を表示します',
    content: 'サンプルサンプルサンプルサンプル',
  }
  const component = shallow(<ArticleContent article={article} />)
  expect(component).toMatchSnapshot()
})
