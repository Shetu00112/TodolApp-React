import React, { useState } from 'react'
import Todo from './Components/Todo'
import Form from './Components/Form'

const App = () => {
    const [TodoTitle, setTodoTitle] = useState('')
    const [TodoList, setTodoList] = useState([])
    const [IsEditable, setIsEditable] = useState(false)
    const [Editable, setEditable] = useState(null)
    return (
        <>
            <Form
                TodoTitle={TodoTitle}
                setTodoTitle={setTodoTitle}
                TodoList={TodoList}
                setTodoList={setTodoList}
                IsEditable={IsEditable}
                setIsEditable={setIsEditable}
                Editable={Editable}
                setEditable={setEditable}
            />
            <Todo
                TodoList={TodoList}
                setTodoList={setTodoList}
                setIsEditable={setIsEditable}
                setEditable={setEditable}
                setTodoTitle={setTodoTitle}
            />
        </>
    )
}

export default App
