import axios from 'axios'
import dayjs from 'dayjs'
import MockDate from 'mockdate'

import { articlesController } from 'src/controllers/articles'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

MockDate.set(dayjs('2020/01/01').format('YYYY/MM/DD'))

const fetchedAllArticles = {
  contents: [
    {
      id: 'a',
      publishedAt: new Date('2020/01/01'),
      title: 'test title',
      description: 'test description',
      content: '<p>test content</p>',
    },
    {
      id: 'b',
      publishedAt: new Date('2020/01/01'),
      title: 'test title',
      description: 'test description',
      content: '<p>test content</p>',
    },
  ],
  totalCount: 2,
  offset: 1,
  limit: 20,
}

const expectedAllArticles = {
  contents: [
    {
      id: 'a',
      publishedAt: '2020/01/01',
      title: 'test title',
      description: 'test description',
      content: '<p>test content</p>',
    },
    {
      id: 'b',
      publishedAt: '2020/01/01',
      title: 'test title',
      description: 'test description',
      content: '<p>test content</p>',
    },
  ],
  totalCount: 2,
  offset: 1,
  limit: 20,
}

test('should return getAllArticleIds', () => {
  const resp = { data: fetchedAllArticles }
  mockedAxios.get
    .mockResolvedValueOnce(resp)
    .mockResolvedValueOnce({ data: { contents: [] } })

  const { getAllArticleIds } = articlesController()

  return getAllArticleIds().then((data) => {
    expect(data).toEqual(['a', 'b'])
  })
})

test('should return fetchedLimitedArticles', () => {
  const resp = { data: fetchedAllArticles }
  mockedAxios.get.mockResolvedValue(resp)

  const { getLimitedArticles } = articlesController()

  return getLimitedArticles({ limit: 2 }).then((data) => {
    expect(data).toEqual(expectedAllArticles)
  })
})
