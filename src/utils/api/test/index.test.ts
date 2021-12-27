import { validateFormParams } from 'src/utils/api'

describe('validateFormParams', () => {
  it('should return false with undefined data', () => {
    expect(validateFormParams(undefined)).toBe(false)
  })

  it('should return true with  data', () => {
    expect(
      validateFormParams({
        email: 'example@example.com',
        name: 'name',
        content: 'content',
      })
    ).toBe(true)
  })
})
