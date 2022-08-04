import React, { useState, useRef } from 'react'
import TodoItem from '../TodoItem'
import TodoAdd from '../TodoAdd'

function TodoList() {
  const todoId = useRef(2)
  const [todoData, setTodoData] = useState([
    { id: 1, date: '2022-08-04', content: '공부하기', checked: false },
  ])

  return (
    <div>
      <TodoAdd todoId={todoId} todoData={todoData} setTodoData={setTodoData} />
      {todoData.map((itemData) => {
        return <TodoItem itemData={itemData} />
      })}
    </div>
  )
}

export default TodoList
