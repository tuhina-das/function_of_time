import React from 'react'
// import { MdEdit } from "react-icons/md"


export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className="Todo">
            
            <p onClick={() => toggleComplete(task.ID)} className={`${task.completed === 1 ? 'completed' : ""}`}>{task.title}</p>
            <div>
                <button onClick={() => deleteTodo(task.ID, task.day_of_week)} className="delete-button">Delete</button>
            </div>
        </div>
    )
}