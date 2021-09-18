import axios from 'axios'
import MockDate from 'mockdate'

import { fetchArticle } from 'src/repositories/article'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

MockDate.set('20201-01-01')

const fetchedArticle = {
  id: 1,
  publishedAt: new Date(),
  title: 'test title',
  description: 'test description',
  content: '<p>test content</p>',
}

const expectedArticle = {
  id: 1,
  publishedAt: new Date(),
  title: 'test title',
  description: 'test description',
  content: '<p>test content</p>',
}

test('should return fetchedArticle', () => {
  const resp = { data: fetchedArticle }
  mockedAxios.get.mockResolvedValue(resp)

  return fetchArticle('test').then((data) => {
    expect(data).toEqual(expectedArticle)
  })
})
