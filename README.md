This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

This app is Blog app using Next.js and microCMS service.(https://microcms.io)

MIT License. You can freely use and customize in your responsibility.

## Before Starting

You start micoCMS service account.
Then, settting for endopoint as follows.

```
endpoint name

/technology-articles
/technology-articles/${id}


schema

title - text field
description - text field
content - richEditor field

```

In Detail, Please read docs in microCMS(https://document.microcms.io)

## Getting Started

First, settting .env.local following .env.sample

Secondly, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/**`. The page auto-updates as you edit the file.

## Storybook

```bash
yarn storybook
```

## Jest Unit Test

```bash
yarn jest
```

## e2e Intgration Test

```bash
yarn cy:run
```
Caution: M1 Mac(https://www.cypress.io/blog/2021/01/20/running-cypress-on-the-apple-m1-silicon-arm-architecture-using-rosetta-2/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
