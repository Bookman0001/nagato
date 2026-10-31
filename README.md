## Description

Blog app using Next.js with [microCMS](https://microcms.io)

MIT License

## Before Starting

You set up micoCMS service account, then creating endopoint as follows.

GET /technology-articles /technology-articles/${id}

| name        | data type        |
| ----------- | ---------------- |
| title       | text field       |
| description | text field       |
| content     | richEditor field |

POST /messages

| name    | data type      |
| ------- | -------------- |
| email   | text field     |
| name    | text field     |
| content | textarea field |

→ [docs](https://document.microcms.io)

## Getting Started

- settting .env.local

- run the development server:

```bash
npx lefthook install
pnpm i
pnpm dev
```

## Running Unit & Integration Test

```bash
pnpm test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
