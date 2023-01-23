import { testApiHandler } from 'next-test-api-route-handler'

import handler from './'

jest.mock('src/repositories/articles', () => ({
  ...jest.requireActual('src/repositories/articles'),
  fetchSearchedArticles: async () => {
    return await {
      totalCount: 1,
      offset: 1,
      limit: 10,
      contents: [
        {
          id: '1',
          publishedAt: '1991-01-01',
          createdAt: '1991-01-01',
          updatedAt: '1991-01-01',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        },
      ],
    }
  },
}))

describe('getSearchedArticles', () => {
  it('to be return error in 405 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/articles'),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dummy: '1' }),
        })
        await expect(res.json()).resolves.toStrictEqual({
          errorCode: 'ERR405',
          issues: [{ message: 'not alloed method' }],
        })
      },
    })
  })

  it('to be return error in 400 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/articles'),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dummy: '1' }),
        })
        await expect(res.json()).resolves.toStrictEqual({
          errorCode: 'ERR400',
          issues: [
            {
              fieldName: 'keyword',
              message: 'Required',
            },
            {
              fieldName: 'page',
              message: 'Required',
            },
          ],
        })
      },
    })
  })

  it('to be return articles in 200 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/articles'),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ keyword: '', page: '1' }),
        })
        expect(await res.json()).toStrictEqual({
          contents: [
            {
              content: '<p>test content</p>',
              createdAt: '1991-01-01',
              description: 'test description',
              id: '1',
              publishedAt: '1991-01-01',
              title: 'test title',
              updatedAt: '1991-01-01',
            },
          ],
          limit: 10,
          offset: 1,
          totalCount: 1,
        })
      },
    })
  })
})
