/**
 * 이메일 관련 유틸
 */
const emailUtils = {
  // email regular expression check
  regexCheck: (email) => {
    const regex =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    return regex.test(email)
  },

  // black list email check
  blackListCheck: (email) => {
    const blackList = ['test.com', 'pooh.com']
    const domain = email.split('@')[1]

    for (let i = 0; i < blackList.length; i++) {
      if (blackList[i] === domain) return false
    }

    return true
  },
}

export default emailUtils
