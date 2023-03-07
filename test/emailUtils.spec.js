import emailUtils from '~/utils/email'

describe('emailUtils test', () => {
  test('regex check - right email', () => {
    const rightEmail = 'winnie@palusomni.com'
    const result = emailUtils.regexCheck(rightEmail)
    expect(result).toBe(true)
  })

  test('regex check - wrong email', () => {
    const wrongEmail = 'winnie'
    const result = emailUtils.regexCheck(wrongEmail)
    expect(result).toBe(false)
  })
})
