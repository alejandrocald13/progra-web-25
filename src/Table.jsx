import './Table.css'

export default function Table({ tasks, onDelete, onToggleComplete }) {
    return (
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
            {tasks.map((t) => (
            <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.dueDate}</td>
                <td>{t.state ? "Completed" : "Pending"}</td>
                <td>
                <button onClick={() => onDelete(t.id)}>X</button>
                <button onClick={() => onToggleComplete(t)}>✓</button>
                </td>
            </tr>
            ))}
            {tasks.length === 0 && (
            <tr>
                <td colSpan="5">No tasks</td>
            </tr>
            )}
        </tbody>
        </table>
    )
}
