import { z } from 'zod'

export const schema = z.object({
  keyword: z.string(),
  page: z.string(),
})

export const parseSchema = (data: unknown) => schema.safeParse(data)

export type SearchParams = z.infer<typeof schema>
