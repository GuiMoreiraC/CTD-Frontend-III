import React, { useState } from "react";
import "./styles.css";

function App() {
  const [disciplinas, setDisciplinas] = useState([
    {
      nome: "Banco de Dados",
      quantidade: 0,
      media: 0,
    },
    {
      nome: "Desenvolvimento Frontend",
      quantidade: 0,
      media: 0,
    },
    {
      nome: "Desenvolvimento Backend",
      quantidade: 0,
      media: 0,
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const disciplinaSelect = event.target.elements.disciplina.value;
    const notaInput = parseFloat(event.target.elements.nota.value);

    // Verifica se a disciplina selecionada é válida
    const disciplina = disciplinas.find(
      (disciplina) => disciplina.nome === disciplinaSelect
    );

    if (!disciplina) {
      alert("Disciplina selecionada inválida!");
      return;
    }

    // Verifica se a nota é válida
    if (isNaN(notaInput) || notaInput < 0 || notaInput > 10) {
      alert("Informe uma nota válida (entre 0 e 10).");
      return;
    }

    // Atualiza os dados da disciplina
    const updatedDisciplinas = disciplinas.map((disciplina) => {
      if (disciplina.nome === disciplinaSelect) {
        const quantidade = disciplina.quantidade + 1;
        const media =
          (disciplina.media * disciplina.quantidade + notaInput) / quantidade;

        return {
          ...disciplina,
          quantidade,
          media,
        };
      }
      return disciplina;
    });

    setDisciplinas(updatedDisciplinas);

    // Limpa os campos do formulário
    event.target.reset();
  };

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select name="disciplina">
            <option value="" disabled selected>
              Selecione uma disciplina
            </option>
            {disciplinas.map((disciplina) => (
              <option key={disciplina.nome} value={disciplina.nome}>
                {disciplina.nome}
              </option>
            ))}
          </select>
          <input type="number" name="nota" min="0" max="10" step="0.1" />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((disciplina) => (
              <tr key={disciplina.nome}>
                <td>{disciplina.nome}</td>
                <td>{disciplina.quantidade}</td>
                <td>{disciplina.media.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
