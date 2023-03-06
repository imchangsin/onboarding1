import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('form valid test', () => {
  const wrapper = mount(Index);
  test('id: winnie, pw: 1234 = false', () => {
    const result = wrapper.vm.validationCheck("winnie", 1234);
    expect(result).toBe(false);
  });

  test('id: winnie@gmail.com, pw: 1234 = ture', () => {
    const result = wrapper.vm.validationCheck("winnie@gmail.com", 1234);
    expect(result).toBe(true);
  });

  test('id: winnie@gmail.com, pw:   = false', () => {
    const result = wrapper.vm.validationCheck("winnie@gmail.com", '');
    expect(result).toBe(false);
  });

  test('id: winnie@pooh.com, pw: 1234 = false', () => {
    const result = wrapper.vm.validationCheck("winnie@pooh.com", 1234);
    expect(result).toBe(false);
  });

  test('id: winnie@test.com, pw: 1234 = false', () => {
    const result = wrapper.vm.validationCheck("winnie@test.com", 1234);
    expect(result).toBe(false);
  });

})
