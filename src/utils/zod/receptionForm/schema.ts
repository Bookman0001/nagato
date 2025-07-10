import { z } from 'zod'

export const schema = z.object({
  email: z.email({ error: 'メールアドレスの形式が不正です' }),
  name: z
    .string({ error: '必須です' })
    .min(1, { error: '必須です' })
    .max(100, { error: '最大文字数は100文字です' }),
  content: z
    .string({ error: '必須です' })
    .min(1, { error: '必須です' })
    .max(1000, { error: '最大文字数は1000文字です' }),
})

export const parseSchema = (data: unknown) => schema.safeParse(data)

export type FormInput = z.infer<typeof schema>
