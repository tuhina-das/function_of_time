import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("");
    
    const handleSubmit = e =>{
        e.preventDefault(); //(prevents default actions)
        editTodo(value, task.id);

        setValue(""); //clear form after submitting it
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder='Update Task' onChange={
                (e) => setValue(e.target.value)}></input>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}