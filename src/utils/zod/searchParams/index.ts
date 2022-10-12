import { z } from 'zod'

export const schema = z.object({
  keyword: z.string({ invalid_type_error: 'keywordは文字列型です' }),
  page: z.string({ invalid_type_error: 'keywordは文字列型です' }),
})

export const parseSchema = (data: unknown) => schema.safeParse(data)

export type SearchParams = z.infer<typeof schema>
