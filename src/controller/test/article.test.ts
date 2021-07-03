import axios from 'axios'
import dayjs from 'dayjs'
import MockDate from 'mockdate'

import { articleController } from 'src/controller/article'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

MockDate.set(dayjs('2020/01/01').format('YYYY/MM/DD'))

const fetchedArticle = {
  id: 1,
  publishedAt: new Date('2020/01/01'),
  title: 'test title',
  description: 'test description',
  content: '<p>test content</p>',
}

const expectedArticle = {
  id: 1,
  publishedAt: '2020/01/01',
  title: 'test title',
  description: 'test description',
  content: '<p>test content</p>',
}

test('should return fetchedArticle', () => {
  const resp = { data: fetchedArticle }
  mockedAxios.get.mockResolvedValue(resp)

  const { getArticle } = articleController()
  const articleId = '1'

  return getArticle(articleId).then((data) => {
    expect(data).toEqual(expectedArticle)
  })
})
