import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState(""); //state variables of input

    const handleSubmit = e => {
        e.preventDefault(); //(prevents default actions)
        const dropdown = document.getElementById("day-select");
        
        const check = document.getElementById("checkbox");
        console.log("Check is checked? --> " + check.checked);

        addTodo(value, dropdown.value, check.checked);
        setValue(""); //clear form after submitting it
        dropdown.value = ""; //reset dropdown value (setState doesn't work for this, oddly enough)
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder='What is your task?' onChange={
                (e) => setValue(e.target.value)}></input>

            <select name="days" id="day-select">
                <option value="">Day of Week</option>
                <option value="1">Sunday</option>
                <option value="2">Monday</option>
                <option value="3">Tuesday</option>
                <option value="4">Wednesday</option>
                <option value="5">Thursday</option>
                <option value="6">Friday</option>
                <option value="7">Saturday</option>
            </select>

            {/* Question for 3/15: how to style better??? sobbing */}
            <input type="checkbox" className="checkbox" id="checkbox"></input>
            <label className="checkbox-label"> Work-Related</label>

            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}