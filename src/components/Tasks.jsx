import React from "react";
import Task from "./Task";

const Tasks = ({props, HandleTaskClick, HandleTaskDeletion}) => {
    return (
        <>
            {props.map((task) => (<Task task={task} HandleTaskClick={HandleTaskClick} HandleTaskDeletion={HandleTaskDeletion}/>))}
        </>
    )
}

export default Tasks