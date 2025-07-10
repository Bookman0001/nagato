import { z } from 'zod'

const schema = z.object({
  keyword: z.string().default(''),
  page: z.string().default('1'),
})

export const parseSchema = (data: unknown) => schema.safeParse(data)

export type SearchParams = z.infer<typeof schema>
