import React, { useState } from "react";
import './AddTask.css'
import Button from "./Button";

const AddTask = ({HandleTaskAddition}) => {
    const [inputData, setInputData] = useState("")

    const HandleInputChange = (e) => {
        setInputData(e.target.value)
    }
    const HandleAddTaskClick = () => {
        HandleTaskAddition(inputData)
        setInputData("")
    }
    return (
        <div className='add-task-container'>
            <input onChange={HandleInputChange} value={inputData} className='add-task-input' type="text" />
            <div className="add-task-button-container">
            <Button onClick={HandleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask