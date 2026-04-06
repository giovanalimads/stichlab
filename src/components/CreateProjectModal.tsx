import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProjectModal({ onClose }: any) {
  const [name, setName] = useState("");
  const [size, setSize] = useState("400x400");
  const navigate = useNavigate();

  function handleCreate() {
    const [width, height] = size.split("x").map(Number);

    const novoProjeto = {
      id: Date.now(),
      name,
      width,
      height,
    };

    const data = localStorage.getItem("projects");
    const projetos = data ? JSON.parse(data) : [];

    projetos.push(novoProjeto);

    localStorage.setItem("projects", JSON.stringify(projetos));

    navigate("/editor");
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          margin: "100px auto",
          width: 300,
        }}
      >
        <h2>Criar projeto</h2>

        <input
          placeholder="Nome do projeto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select onChange={(e) => setSize(e.target.value)}>
          <option value="400x400">Quadrado (400x400)</option>
          <option value="800x600">Médio (800x600)</option>
          <option value="1200x800">Grande (1200x800)</option>
        </select>

        <button onClick={handleCreate}>Criar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default CreateProjectModal;
