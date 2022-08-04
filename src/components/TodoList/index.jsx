import React, { useState, useRef } from 'react'
import TodoItem from '../TodoItem'
import TodoAdd from '../TodoAdd'
import * as S from './style'

function TodoList() {
  const todoId = useRef(2)
  const [todoData, setTodoData] = useState([
    { id: 1, date: '2022-08-04', content: '공부하기', checked: false },
  ])

  // todo 삭제 함수
  const todoRemoveHandler = (id) => {
    setTodoData(todoData.filter((itemData) => itemData.id !== id))
  }

  // todo check 여부
  const todoCheckHandler = (id) => {
    setTodoData(
      todoData.map((itemData) =>
        itemData.id === id
          ? { ...itemData, checked: !itemData.checked }
          : itemData,
      ),
    )
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>TodoList</S.TodoTitle>
      <TodoAdd todoId={todoId} todoData={todoData} setTodoData={setTodoData} />
      {todoData.map((itemData) => {
        return (
          <TodoItem
            itemData={itemData}
            todoRemoveHandler={todoRemoveHandler}
            todoCheckHandler={todoCheckHandler}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoList
