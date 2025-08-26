import { useState, useEffect } from 'react'
import './Table.css'
import Task from './Task'

function Table(filter){
    const [tasks, setTasks] = useState([Task.create(1, 'Tarea 1', '2025'), Task.create(2, 'Tarea 2', '1985'), Task.create(3, 'Tarea 3', '2030')])
    const [refCont, setRefCont] = useState(0)

    function getTasks (){
    }

    function exportTasks (){
    }

    function deleteTask (idTask){
        setTasks(tasks.filter(task => task.id !== idTask))
        alert('¡Task deleted succesfully!')
    }

    function completeTask (task){
        task.checkTask()
        setRefCont(refCont + 1)
    }

    useEffect(() => {
    }, [])

    return(
        <>
        <table className='table-tasks'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Due Date</th>
                    <th>State</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td> {task.id} </td>
                        <td> {task.name} </td>
                        <td> {task.dueDate} </td>
                        <td> {task.state ? "Completed" : "Pending"}</td>
                        <td>
                            <button onClick={() => deleteTask(task.id)}>X</button>
                            <button onClick={() => completeTask(task)}>✓</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )

} export default Table