import { useEffect, useState } from 'react'
import './App.css'
import Table from './Table'
import Form from './Form'
import Task from './Task'

function App() {
  const [tasks, setTasks] = useState([
    Task.create(1, 'Tarea 1', '2025'),
    Task.create(2, 'Tarea 2', '1985'),
    Task.create(3, 'Tarea 3', '2030'),
  ])

  const [filterOption, setFilterOption] = useState('all')

  const addTask = ({ name, dueDate }) => {
    const newTask = Task.create(Date.now(), name, dueDate)
    setTasks(prev => [...prev, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const toggleComplete = (task) => {
    task.checkTask()
    setTasks(prev => [...prev]) // cloning task to force reload
  }

  const filteredTasks = tasks.filter(t => {
      if (filterOption === 'all') return true
      if (filterOption === 'pending') return !t.state
      if (filterOption === 'completed') return t.state
      return true
    })

  return (
    <>
      <header>
        <h2 className='title'>Task Board</h2>
        <div className='filter'>
          <select
            id="filter"
            className='filter-opt'
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </header>

      <Form addTask={addTask} />

      <Table
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </>
  )
}

export default App
