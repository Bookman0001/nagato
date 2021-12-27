import { regExp } from 'src/utils'

describe('regExp', () => {
  it('should return false with invalid mail', () => {
    expect(regExp.email.test('')).toBe(false)
    expect(regExp.email.test('111111')).toBe(false)
    expect(regExp.email.test('_@p')).toBe(false)
    expect(regExp.email.test('_>@hoc.jp')).toBe(false)
  })

  it('should return truewith valid mail', () => {
    expect(regExp.email.test('sample@example.com')).toBe(true)
  })
})
