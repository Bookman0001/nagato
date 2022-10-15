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
          body: JSON.stringify({ dummy: '1' }),
        })
        expect(await res.json()).toStrictEqual({
          message: 'not allowed method',
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
          body: JSON.stringify({ dummy: '1' }),
        })
        expect(await res.json()).toStrictEqual({
          issues: [
            {
              code: 'invalid_type',
              expected: 'object',
              message: 'Expected object, received string',
              path: [],
              received: 'string',
            },
          ],
          name: 'ZodError',
        })
      },
    })
  })
})
