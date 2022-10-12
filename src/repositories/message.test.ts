import { postMessage } from 'src/repositories/message'
import type { FormInput } from 'src/utils/zod/receptionForm'

const params: FormInput = {
  email: 'test@example.com',
  name: 'name',
  content: 'content',
}

describe('postMessage', () => {
  it('should return message resposne', () => {
    return postMessage(params).then((data) => {
      expect(data).toEqual({
        email: 'test@example.com',
        name: 'name',
        content: 'content',
      })
    })
  })
})
