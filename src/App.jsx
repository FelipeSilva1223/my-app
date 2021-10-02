import React, { useState } from 'react'
import Tasks from './components/Tasks'

import './App.css'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      _id: 1,
      title: 'Estudar programção',
      completed: false
    },
    {
      _id: 2,
      title: 'Ler livros',
      completed: true
    }
  ])

  const HandleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
          if (task._id === taskId) return {...task, completed: !task.completed}

          return task
      })
      setTasks(newTasks)
  }

  const HandleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
        title: taskTitle,
        _id: Math.random(10),
        completed: false
    }]
    setTasks(newTasks)
  }

  const HandleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task._id !== taskId)

      setTasks(newTasks)
  }
  return (
    <>
      <div className='container'>
        <AddTask HandleTaskAddition={HandleTaskAddition} />
        <Tasks props={tasks} HandleTaskClick={HandleTaskClick} HandleTaskDeletion={HandleTaskDeletion}/>
      </div>
    </>
  )
}

export default App;