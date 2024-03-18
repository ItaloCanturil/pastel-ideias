import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import OrderForm from '../OrderForm.vue'

describe('OrderForm', () => {
  it('input title validations', async () => {
    const wrapper = mount(OrderForm)
    const titleInput = wrapper.find('#title-order')
    // Title and flavor required, min 3 max 60
    await titleInput.setValue('ab')
    expect(wrapper.find('.error-message').exists()).toBe(true)

    await titleInput.setValue('abc')
    expect(wrapper.find('.error-message').exists()).toBe(false)

    await titleInput.setValue('abc'.repeat(55))
    expect(wrapper.find('.error-message').exists()).toBe(true)

    await titleInput.setValue('ac'.repeat(30))
    expect(wrapper.find('.error-message').exists()).toBe(false)
  }),
    it('input flavor validations', async () => {
      const wrapper = mount(OrderForm)
      const flavorInput = wrapper.find('#flavor')
      // Title and flavor required, min 3 max 60
      await flavorInput.setValue('ab')
      expect(wrapper.find('.error-message').exists()).toBe(true)

      await flavorInput.setValue('abc')
      expect(wrapper.find('.error-message').exists()).toBe(false)

      await flavorInput.setValue('abc'.repeat(55))
      expect(wrapper.find('.error-message').exists()).toBe(true)

      await flavorInput.setValue('ac'.repeat(30))
      expect(wrapper.find('.error-message').exists()).toBe(false)
    })
})
