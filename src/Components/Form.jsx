import React from 'react'

const Form = (props) => {
    const {
        TodoTitle,
        setTodoTitle,
        TodoList,
        setTodoList,
        IsEditable,
        setIsEditable,
        Editable,
        setEditable,
    } = props
    const Add = (e) => {
        e.preventDefault()
        const data = {
            title: TodoTitle,
            id: Date.now(),
        }
        setTodoList([...TodoList, data])
        setTodoTitle('')
    }

    const UpdateHandler = (e) => {
        e.preventDefault()
        Editable.title = TodoTitle || Editable.title
        setIsEditable(false)
        setEditable(null)
        setTodoTitle('')
    }
    return (
        <>
            <form action="">
                <input
                    type="text"
                    name=""
                    id=""
                    value={TodoTitle}
                    onChange={(e) => {
                        setTodoTitle(e.target.value)
                    }}
                />
                <button
                    onClick={(e) => {
                        IsEditable === true ? UpdateHandler(e) : Add(e)
                    }}>
                    {IsEditable === true ? 'Update' : 'Add'}
                </button>
            </form>
        </>
    )
}

export default Form
