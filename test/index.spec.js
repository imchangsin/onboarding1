import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('index page', () => {
  const wrapper = mount(Index)

  test('empty password', () => {
    const password = ''
    const result = wrapper.vm.validatePassword(password)
    expect(result).toBe(false)
  })

  test('right password', () => {
    const password = 'not-empty-password'
    const result = wrapper.vm.validatePassword(password)
    expect(result).toBe(true)
  })
})
