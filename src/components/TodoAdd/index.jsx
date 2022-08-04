import React, { useState } from 'react'

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
    <div>
      <input type="date" name="date" onChange={userInputHandler} />
      <input name="content" onChange={userInputHandler} />
      <button onClick={() => todoAddHandler(userInput)}>추가하기</button>
    </div>
  )
}

export default TodoAdd
