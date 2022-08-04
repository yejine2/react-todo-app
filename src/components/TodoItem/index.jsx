import React from 'react'

function TodoItem({ itemData, todoRemoveHandler, todoCheckHandler }) {
  return (
    <>
      <p>{itemData.date}</p>
      <p>{itemData.content}</p>
      <button onClick={() => todoCheckHandler(itemData.id)}>
        {itemData.checked ? <p>미완료</p> : <p>완료</p>}
      </button>
      <button onClick={() => todoRemoveHandler(itemData.id)}>제거하기</button>
    </>
  )
}

export default TodoItem
