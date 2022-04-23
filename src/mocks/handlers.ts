import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost/technology-articles', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          publishedAt: '1991-01-01',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        },
        {
          id: '2',
          publishedAt: '1991-01-01',
          title: 'test title',
          description: 'test description',
          content: '<p>test content</p>',
        },
      ])
    )
  }),
  rest.get('http://localhost/technology-articles/test', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        publishedAt: '1991-01-01',
        title: 'test title',
        description: 'test description',
        content: '<p>test content</p>',
      })
    )
  }),
  rest.get('http://localhost/technology-articles/draft', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        title: 'test title',
        description: 'test description',
        content: '<p>test content</p>',
      })
    )
  }),
  rest.post('http://localhost/messages', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        email: 'test@example.com',
        name: 'name',
        content: 'content',
      })
    )
  }),
]
