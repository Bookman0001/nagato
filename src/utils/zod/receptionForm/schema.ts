import { z } from 'zod'

export const schema = z.object({
  email: z.string().email({ message: 'メールアドレスの形式が不正です' }),
  name: z
    .string()
    .min(1, { message: '必須です' })
    .max(100, { message: '最大文字数は100文字です' }),
  content: z
    .string()
    .min(1, { message: '必須です' })
    .max(1000, { message: '最大文字数は1000文字です' }),
})

export const parseSchema = (data: unknown) => schema.safeParse(data)

export type FormInput = z.infer<typeof schema>
