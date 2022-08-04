import React from 'react'

function TodoItem({ itemData }) {
  return (
    <>
      <p>{itemData.date}</p>
      <p>{itemData.content}</p>
    </>
  )
}

export default TodoItem
