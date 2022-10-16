import { testApiHandler } from 'next-test-api-route-handler'

import handler from './'

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

jest.mock('src/services/sendGrid', () => ({
  ...jest.requireActual('src/services/sendGrid'),
  sendMail: async () => {
    return await undefined
  },
}))

describe('getSearchedArticles', () => {
  it('to be return error in 405 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/message'),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dummy: '1' }),
        })
        await expect(res.json()).resolves.toStrictEqual({
          message: 'not allowed method',
        })
      },
    })
  })

  it('to be return error in 400 status', async () => {
    expect.hasAssertions()
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/message'),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dummy: '1' }),
        })
        await expect(res.json()).resolves.toStrictEqual({
          issues: [
            {
              code: 'invalid_type',
              expected: 'string',
              message: 'Required',
              path: ['email'],
              received: 'undefined',
            },
            {
              code: 'invalid_type',
              expected: 'string',
              message: 'Required',
              path: ['name'],
              received: 'undefined',
            },
            {
              code: 'invalid_type',
              expected: 'string',
              message: 'Required',
              path: ['content'],
              received: 'undefined',
            },
          ],
          name: 'ZodError',
        })
      },
    })
  })

  it('to be return success object in 200 status', async () => {
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
          message: 'request is successful',
        })
      },
    })
  })
})
