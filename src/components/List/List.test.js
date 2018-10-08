import React from 'react'
import { shallow } from 'enzyme'

import List from './List'

describe('NewToDo', () => {
  it('renders', () => {
    const wrapper = shallow(<List />)
    expect(wrapper).toBeTruthy()
  })

  it('submits todo', () => {
    const wrapper = shallow(<List />)
    wrapper.instance().submitToDo('todo 1')
    expect(wrapper.instance().state.toDos[0]).toEqual({
      complete: false,
      text: 'todo 1',
    })
  })

  it('toggles completion', () => {
    const wrapper = shallow(<List />)
    wrapper.setState({
      toDos: [
        {
          complete: false,
          text: 'todo 1',
        },
      ],
    })

    wrapper.instance().toggleCompletion({ text: 'todo 1' })
    expect(wrapper.instance().state.toDos[0]).toEqual({
      complete: true,
      text: 'todo 1',
    })
  })

  it('doesnt toggle completion for missing text', () => {
    const wrapper = shallow(<List />)
    wrapper.setState({
      toDos: [
        {
          complete: false,
          text: 'todo 1',
        },
      ],
    })

    wrapper.instance().toggleCompletion({ text: 'todo 2' })
    expect(wrapper.instance().state.toDos[0]).not.toEqual({
      complete: true,
      text: 'todo 1',
    })
  })

  it('deletes todo', () => {
    const wrapper = shallow(<List />)
    wrapper.setState({
      toDos: [
        {
          complete: false,
          text: 'todo 1',
        },
      ],
    })
    wrapper.instance().deleteToDo({ text: 'todo 1' })
    expect(wrapper.instance().state.toDos).toEqual([])
  })
})
