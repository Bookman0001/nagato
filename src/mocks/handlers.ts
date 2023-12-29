import { http, HttpResponse } from 'msw'

// MicroCMS handlers
export const handlers = [
  http.get('/technology-articles', () => {
    return HttpResponse.json(
      [
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
      ],
      { status: 200 }
    )
  }),
  http.get('/technology-articles/test', () => {
    return HttpResponse.json(
      {
        id: '1',
        publishedAt: '1991-01-01',
        title: 'test title',
        description: 'test description',
        content: '<p>test content</p>',
      },
      { status: 200 }
    )
  }),
  http.get('/technology-articles/draft', () => {
    return HttpResponse.json({
      id: '1',
      title: 'test title',
      description: 'test description',
      content: '<p>test content</p>',
    })
  }),
  http.post('/messages', () => {
    return HttpResponse.json(
      {
        email: 'test@example.com',
        name: 'name',
        content: 'content',
      },
      { status: 200 }
    )
  }),
]
