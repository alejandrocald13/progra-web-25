import { useState, useEffect } from 'react'
import './Table.css'
import Task from './Task'

function Table(filter){
    const [tasks, setTasks] = useState([Task.create(1, 'Tarea 1', '2025'), Task.create(2, 'Tarea 2', '1985'), Task.create(3, 'Tarea 3', '2030')])
    const [cont, setCont] = useState(0)

    function getTasks (){
    }

    function exportTasks (){
    }

    function deleteTask (idTask){
        
    }

    useEffect(() => {
    }, [])

    useEffect(() => {
        setCont(cont + 1);
        console.log(cont)
    }, [tasks])

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
                            <button>X</button>
                            <button onClick>✓</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )

} export default Table