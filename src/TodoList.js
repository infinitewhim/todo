import React from 'react'
import {Todo} from './Todo'


export const TodoList = ({ todos }) => {
  return (
    todos.map(todo => {
        return <Todo todo={todo} />
    })
  )
}
