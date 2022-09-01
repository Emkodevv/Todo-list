import React, { useState } from 'react';
import './style.css';


const AddTodo = ({todo, setTodo}) => {

    const [value, setValue] = useState()

    function addNewTask() {
        setTodo([ 
            ...todo,
        {
            id: Date.now(),
            title: value,
            status: true,
        }
        ])
        setValue('')
    }

    return (
        <div className='add-todo'>
        <input className='add-name' placeholder="Добавить задачу" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} />
        <button className='add-button' onClick={() => addNewTask()}>Добавить новую задачу</button>
        </div>
    );
};

export default AddTodo;