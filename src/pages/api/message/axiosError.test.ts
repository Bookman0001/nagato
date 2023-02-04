import { testApiHandler } from 'next-test-api-route-handler'

import handler from './'

import { errorCode } from 'src/types/error'

jest.mock('src/repositories/message', () => ({
  ...jest.requireActual('src/repositories/message'),
  postMessage: async () => {
    return await Promise.reject(new Error('axios error'))
  },
}))

describe('getSearchedArticles', () => {
  it('to be return success object in 500 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/message'),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: 'example@example.com',
            name: 'John Doe',
            content: 'Hello.',
          }),
        })
        await expect(res.json()).resolves.toStrictEqual({
          errorCode: errorCode.internalServerError,
          issues: [{ message: 'internal server error happened' }],
        })
      },
    })
  })
})
