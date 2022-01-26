/**
 * @jest-environment node
 */
import { postMessage } from 'src/repositories/message'
import { FormParams } from 'src/types'

const params: FormParams = {
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
