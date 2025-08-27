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
                <button className="btn" onClick={() => onToggleComplete(t)}><svg className="btn-complete" stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg></button>
                <button className="btn" onClick={() => onDelete(t.id)}><svg className="btn-delete" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></button>
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
