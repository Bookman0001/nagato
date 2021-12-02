import axios from 'axios'

import { postMessage } from 'src/repositories/message'
import { FormParams } from 'src/types'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const params: FormParams = {
  email: 'test@example.com',
  name: 'name',
  content: 'content',
}

const expectedResponse = {
  email: 'test@example.com',
  name: 'name',
  content: 'content',
}

describe('postMessage', () => {
  it('should return message resposne', () => {
    const res = { data: params }
    mockedAxios.post.mockResolvedValue(res)

    return postMessage(params).then((data) => {
      expect(data).toEqual(expectedResponse)
    })
  })
})
