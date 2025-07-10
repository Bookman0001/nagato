import { testApiHandler } from 'next-test-api-route-handler'

import handler from 'src/pages/api/message'
import { errorCode } from 'src/types/error'

jest.mock('src/repositories/message', () => ({
  ...jest.requireActual('src/repositories/message'),
  postMessage: async () => {
    return await {
      email: 'example@example.com',
      name: 'John Doe',
      content: 'Hello.',
    }
  },
}))

describe('getSearchedArticles', () => {
  it('to be return error in 405 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      pagesHandler: handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dummy: '1' }),
        })
        await expect(res.json()).resolves.toStrictEqual({
          errorCode: errorCode.wrongMethodRequest,
          issues: [{ message: 'not alloed method' }],
        })
      },
    })
  })

  it('to be return error in 400 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      pagesHandler: handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dummy: '1' }),
        })
        await expect(res.json()).resolves.toStrictEqual({
          errorCode: errorCode.badRequest,
          issues: [
            {
              fieldName: 'email',
              message: 'メールアドレスの形式が不正です',
            },
            {
              fieldName: 'name',
              message: '必須です',
            },
            {
              fieldName: 'content',
              message: '必須です',
            },
          ],
        })
      },
    })
  })

  it('to be return success object in 200 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      pagesHandler: handler,
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
          message: 'request is successful',
        })
      },
    })
  })
})
