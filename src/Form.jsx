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


        <button type="submit" className="btn">
            <svg className="btn-add" stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
        </button>

        </form>
    );
}
