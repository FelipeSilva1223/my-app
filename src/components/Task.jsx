import React from "react";
import './Task.css'

const Task = ({task, HandleTaskClick, HandleTaskDeletion}) => {
    // return <div className='task-container'>{task.title}</div>
    return (
        <div className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className='task-title' onClick={() => HandleTaskClick(task._id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task' onClick={() => HandleTaskDeletion(task._id)}>X</button>
            </div>
        </div>
    )
}

export default Task