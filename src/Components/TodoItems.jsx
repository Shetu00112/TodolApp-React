import React from 'react'

const TodoItems = (props) => {
    const { TodoList, setIsEditable, setEditable, setTodoTitle, setTodoList } =
        props
    const EditHandler = (id) => {
        const EditableTodo = TodoList.find((item) => item.id === id)
        setIsEditable(true)
        setEditable(EditableTodo)
        setTodoTitle(EditableTodo.title)
    }
    const DeleteHandler = (id) => {
        const DeletableTodo = TodoList.filter((item) => item.id !== id)
        setTodoList(DeletableTodo)
    }
    return (
        <>
            {TodoList.map((item) => (
                <ul>
                    <li>
                        <span>{item.title}</span>
                        <button
                            onClick={() => {
                                EditHandler(item.id)
                            }}>
                            Edit
                        </button>
                        <button
                            onClick={() => {
                                DeleteHandler(item.id)
                            }}>
                            Delete
                        </button>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default TodoItems
