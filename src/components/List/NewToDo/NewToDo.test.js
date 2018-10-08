import React from 'react'
import { spyOn } from 'jest'
import { shallow, mount, render } from 'enzyme'

import NewToDo from './NewToDo'

describe('NewToDo', () => {
  it('renders', () => {
    const newToDo = shallow(<NewToDo submit={() => {}} />)
    expect(newToDo).toBeTruthy()
  })

  it('changes input field', () => {
    const wrapper = mount(<NewToDo submit={() => {}} />)
    wrapper.find('input').simulate('change', { target: { value: 'todo 1' } })
    expect(wrapper.state('toDo')).toEqual('todo 1')
  })

  it('changes input field', () => {
    const wrapper = mount(<NewToDo submit={() => {}} />)
    wrapper.find('input').simulate('change', { target: { value: 'todo 1' } })
    expect(wrapper.state('toDo')).toEqual('todo 1')
  })

  it('Submit works', done => {
    function callback() {
      done()
    }

    const wrapper = mount(<NewToDo submit={callback} />)
    const spy = jest.spyOn(wrapper.instance(), 'submitTodo')
    wrapper.find('input').simulate('change', { target: { value: 'todo 1' } })
    const form = wrapper.find('form').simulate('submit')
    expect(spy).toHaveBeenCalled()
  })
})
