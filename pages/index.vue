<template>
  <section>
    <div id="login-box">
      <svg viewBox="0 0 791 143" class="icon">
        <g>
          <path
            d="M74.2995 0.779663L0.581299 54.339L28.7391 141H119.86L146.259 59.7522C147.308 56.5244 146.159 52.9884 143.413 50.9934L74.2995 0.779663Z"
            fill="#0EA6A6"
          ></path>
          <path
            d="M0.581543 54.3391L28.7394 141H84.5603L106.496 73.4897C107.545 70.2619 106.396 66.7259 103.65 64.7309L44.9641 22.0933L0.581543 54.3391Z"
            fill="#2BB1B1"
          ></path>
          <path
            d="M69.6951 75.3093L20.7067 39.7173L0.581543 54.339L28.7394 141H54.0425L72.5408 84.0679C73.5897 80.8401 72.4407 77.3042 69.6949 75.3092L69.6951 75.3093Z"
            fill="#65C6C6"
          ></path>
          <path
            d="M1.2993 53.8176L0.581543 54.3391L28.7394 141H30.213L45.8494 92.876C46.8982 89.6483 45.7493 86.1122 43.0034 84.1173L1.2993 53.8176Z"
            fill="#7ACECE"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M197.13 85.0435V141H317.652V85.0435H197.13ZM292.674 120.848H222.109V105.196H292.674V120.848ZM292.674 6V78.0652H317.652V6H292.674ZM246.565 31.1739C246.565 46.1087 224.783 56.087 191 56.6087V77.413C215.522 77.2826 235.022 73.1087 248.978 65.087C264.304 56.1522 272.065 42.7174 272.065 25.1739V7.63043H191V28.0435H246.565V31.1739ZM442.804 115.5V141H468.369V94.0435H348.76V115.5H442.804ZM443.326 6V87.6522H468.304V56.0217H484.347V31.8261H468.304V6H443.326ZM344.717 7.63043V82.5652H426.173V7.63043H401.847V24.1957H369.043V7.63043H344.717ZM401.847 62.6739H369.043V43.5H401.847V62.6739ZM598.088 141L597.762 6H622.74V56.087H639.436V80.2826H622.74V141H598.088ZM496.153 108.652C506.914 106.891 516.11 96.5217 522.631 78.587C529.153 60.7174 532.74 36.587 532.871 8.80435L558.371 9.71739C558.305 29.2826 556.544 47.4783 553.088 63.8478L553.023 64.3044L592.349 119.674L571.936 134.022L544.153 93.3261L543.371 95.087C537.827 107.804 530.849 117.587 522.631 124.304C514.74 130.761 505.805 134.217 496.088 134.543V108.652H496.153ZM720.956 121.826L721.412 121.435L782.39 142.435L790.738 120.391L735.695 103.957L736.282 102.848C737.651 100.043 738.825 97.1087 739.738 94.0435L714.695 88.5652C712.086 96.7174 705.108 104.152 694.869 109.5C684.76 114.783 672.173 117.783 659.26 117.913V141C683.521 140.804 705.956 133.826 720.956 121.826ZM761.39 6V98.6087H784.608V6H761.39ZM726.89 44.3478V84H749.782V6H726.89V23.6739H699.108V44.3478H726.89ZM652.738 6V81.2609H684.825C695.521 81.2609 709.738 79.9565 718.086 77.087V57.3261C710.13 59.6087 698.26 61.1087 687.173 61.1087H676.282V6H652.738Z"
            fill="#001E40"
          ></path>
        </g>
      </svg>
      <form>
        <input
          class="input-email"
          v-bind:class="{ '--error': emailError }"
          v-model="email"
          placeholder="이메일"
        />
        <div v-if="emailError" class="errorMsg">{{ emailError }}</div>
        <input
          class="input-pw"
          v-bind:class="{ '--error': pwError }"
          v-model="pw"
          type="password"
          autoComplete="off"
          placeholder="비밀번호"
        />
        <div v-if="pwError" class="errorMsg">{{ pwError }}</div>
        <button class="login-btn" @click="loginButtonClicked">로그인</button>
      </form>
    </div>
  </section>
</template>
<script>
import emailUtils from '~/utils/email'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      pw: '',
      emailError: 0,
      pwError: 0,
    }
  },
  methods: {
    async loginButtonClicked(event) {
      event.preventDefault()

      let validated = true

      if (!this.validateEmail(this.email)) validated = false
      if (!this.validatePassword(this.pw)) validated = false

      if (!validated) return

      await this.requestLogin(this.email, this.pw)
    },
    validateEmail(email) {
      this.emailError = ''

      if (!emailUtils.regexCheck(email)) {
        this.emailError = '이메일 형식이 올바르지 않습니다. 다시 입력해 주세요.'
        return false
      }

      if (!emailUtils.blackListCheck(email)) {
        this.emailError = '이메일 형식이 올바르지 않습니다. 다시 입력해 주세요.'
        return false
      }

      return true
    },
    validatePassword(password) {
      this.pwError = ''

      if (password === '') {
        this.pwError = '비밀번호를 입력해 주세요.'
        return false
      }

      return true
    },
    async requestLogin(email, password) {
      await this.$axios
        .get('./login')
        .then(function (response) {
          $nuxt.$router.push({ name: 'hello' })
        })
        .catch(function (error) {
          //error
        })
    },
  },
}
</script>
<style scoped>
body {
  background: #f9fafc;
}
#login-box {
  width: 330px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.input-email,
.input-pw {
  width: 100%;
  height: 55px;
  padding: 0 15px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 14px;
  line-height: 55px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
input.--error {
  border-color: #ee5f5f;
  background: #fff5f5;
}
.login-btn {
  width: 100%;
  height: 55px;
  margin-top: 5px;
  font-size: 16px;
  color: #fff;
  background-color: #003166;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
}
.errorMsg {
  text-align: left;
  color: #ee5f5f;
  font-size: 12px;
  margin-top: -5px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.icon {
  display: inline-block;
  margin-bottom: 20px;
  width: 80%;
}
</style>
