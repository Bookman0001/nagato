import { rest } from 'msw'

export const handlers = [
  rest.get('/sample', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        content: 'sample text',
      })
    )
  }),
]
