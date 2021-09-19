import axios from 'axios'

import {
  fetchAllArticles,
  fetchLimitedArtcles,
} from 'src/repositories/articles'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const fetchedArticles = [
  {
    id: 1,
    publishedAt: new Date(),
    title: 'test title',
    description: 'test description',
    content: '<p>test content</p>',
  },
  {
    id: 2,
    publishedAt: new Date(),
    title: 'test title',
    description: 'test description',
    content: '<p>test content</p>',
  },
]

const expectedArticles = [
  {
    id: 1,
    publishedAt: new Date(),
    title: 'test title',
    description: 'test description',
    content: '<p>test content</p>',
  },
  {
    id: 2,
    publishedAt: new Date(),
    title: 'test title',
    description: 'test description',
    content: '<p>test content</p>',
  },
]

test('should return fetchedArticles', () => {
  const resp = { data: fetchedArticles }
  mockedAxios.get.mockResolvedValue(resp)

  return fetchAllArticles({ limit: 10, offset: 0 }).then((data) => {
    expect(data).toEqual(expectedArticles)
  })
})

test('should return fetchedLimitedArticles', () => {
  const resp = { data: fetchedArticles }
  mockedAxios.get.mockResolvedValue(resp)

  return fetchLimitedArtcles({ limit: 2 }).then((data) => {
    expect(data).toEqual(expectedArticles)
  })
})
