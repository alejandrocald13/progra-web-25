import { useState } from "react";
import "./Form.css";

export default function Form({ addTask }) {
    const [name, setName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !dueDate) return;
        addTask({ name, dueDate });
        setName("");
        setDueDate("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
        <div className="field">
            <label>Name</label>
            <input
            type="text"
            className="field-input"
            placeholder="Ex. Do Web Programming"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className="field">
            <label>Due Date</label>
            <input
            type="date"
            className="field-input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            />
        </div>

        <button type="submit" className="btn add">Agregar</button>
        </form>
    );
}
