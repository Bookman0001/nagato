import { testApiHandler } from 'next-test-api-route-handler'

import handler from './'

import { errorCode } from 'src/types/error'

jest.mock('src/repositories/articles', () => ({
  ...jest.requireActual('src/repositories/articles'),
  fetchSearchedArticles: async () => {
    return await Promise.reject(new Error('axios error'))
  },
}))

describe('getSearchedArticles', () => {
  it('to be return error in 500 status', async () => {
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
          errorCode: errorCode.internalServerError,
          issues: [{ message: 'internal server error happened' }],
        })
      },
    })
  })
})
