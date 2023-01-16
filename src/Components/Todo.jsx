import React from 'react'
import TodoItems from './TodoItems'

const Todo = (props) => {
    const { TodoList, setEditable, setIsEditable, setTodoTitle, setTodoList } =
        props
    return (
        <>
            <TodoItems
                TodoList={TodoList}
                setEditable={setEditable}
                setIsEditable={setIsEditable}
                setTodoTitle={setTodoTitle}
                setTodoList={setTodoList}
            />
        </>
    )
}

export default Todo
