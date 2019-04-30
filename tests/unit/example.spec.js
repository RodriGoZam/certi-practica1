import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calcualtor.vue', () => {
  it('Checks that Clear Button method resets result back to 0', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.find('td.clear').trigger('click')
    expect(wrapper.vm.result).to.equal(0)
  })

  it('Checks that Add method works', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.find('td.four').trigger('click') //4+4=8
    wrapper.find('td.add').trigger('click')
    wrapper.find('td.four').trigger('click')
    wrapper.find('td.equals').trigger('click')
    expect(wrapper.vm.result).to.equal('8')
  })

  it('Checks that Subtract method works', () => {
    const wrapper = shallowMount(Calculator)  //9-4=5
    wrapper.find('td.nine').trigger('click')
    wrapper.find('td.subtract').trigger('click')
    wrapper.find('td.four').trigger('click')
    wrapper.find('td.equals').trigger('click')
    expect(wrapper.vm.result).to.equal('5')
  })

  it('Checks that Divide method works', () => {
    const wrapper = shallowMount(Calculator)
    wrapper.find('td.one').trigger('click') //10÷5=2
    wrapper.find('td.zero').trigger('click') 
    wrapper.find('td.divide').trigger('click')
    wrapper.find('td.five').trigger('click')
    wrapper.find('td.equals').trigger('click')
    expect(wrapper.vm.result).to.equal('2')
  })

  it('Checks that Multiplication method works', () => {
    const wrapper = shallowMount(Calculator)  
    wrapper.find('td.six').trigger('click') //6x7=42
    wrapper.find('td.times').trigger('click')
    wrapper.find('td.seven').trigger('click')
    wrapper.find('td.equals').trigger('click')
    expect(wrapper.vm.result).to.equal('42')
  })
})
