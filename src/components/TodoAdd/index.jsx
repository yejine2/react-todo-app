import React, { useState } from 'react'
import * as S from './style'

function TodoAdd({ todoId, todoData, setTodoData }) {
  const [userInput, setUserInput] = useState({ date: '', content: '' })

  const userInputHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  // todo 추가 함수
  const todoAddHandler = (userInput) => {
    setTodoData([
      ...todoData,
      {
        id: todoId.current,
        date: userInput.date,
        content: userInput.content,
        checked: false,
      },
    ])
    todoId.current += 1
  }

  return (
    <S.AddContainer>
      <S.AddInput type="date" name="date" onChange={userInputHandler} />
      <S.AddInput name="content" onChange={userInputHandler} />
      <S.AddButton onClick={() => todoAddHandler(userInput)}>
        추가하기
      </S.AddButton>
    </S.AddContainer>
  )
}

export default TodoAdd
