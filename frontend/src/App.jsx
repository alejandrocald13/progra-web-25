import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tab, setTab] = useState("hide");
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const hideSecret = async () => {
    const res = await axios.post("http://localhost:8000/hide/", { message: text });
    setKey(res.data.key);
  };

  const revealSecret = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/reveal/${key}/`);
      setResult(res.data.message);
    } catch {
      setResult("Secreto no encontrado o ya fue revelado.");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 className="title">Enlace Seguro</h1>
        <div className="tabs">
          <button className={tab === "hide" ? "active" : ""} onClick={() => setTab("hide")}>Ocultar</button>
          <button className={tab === "reveal" ? "active" : ""} onClick={() => setTab("reveal")}>Revelar</button>
        </div>

        {tab === "hide" && (
          <div className="section">
            <textarea
              placeholder="Escribe tu secreto..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="textarea"
            />
            <button className="action" onClick={hideSecret}>Ocultar</button>
            {key && <p className="result">Tu clave: <b>{key}</b></p>}
          </div>
        )}

        {tab === "reveal" && (
          <div className="section">
            <input
              placeholder="Ingresa tu clave..."
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="input"
            />
            <button className="action" onClick={revealSecret}>Revelar</button>
            {result && <p className="result">{result}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;