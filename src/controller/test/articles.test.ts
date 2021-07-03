import axios from 'axios'
import dayjs from 'dayjs'
import MockDate from 'mockdate'

import { articlesController } from 'src/controller/articles'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

MockDate.set(dayjs('2020/01/01').format('YYYY/MM/DD'))

const fetchedAllArticles = {
  contents: [
    {
      id: 1,
      publishedAt: new Date('2020/01/01'),
      title: 'test title',
      description: 'test description',
      content: '<p>test content</p>',
    },
    {
      id: 2,
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
      id: 1,
      publishedAt: '2020/01/01',
      title: 'test title',
      description: 'test description',
      content: '<p>test content</p>',
    },
    {
      id: 2,
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

test('should return fetchedAllArticles', () => {
  const resp = { data: fetchedAllArticles }
  mockedAxios.get.mockResolvedValue(resp)

  const { getAllArticles } = articlesController()

  return getAllArticles().then((data) => {
    expect(data).toEqual(expectedAllArticles)
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
