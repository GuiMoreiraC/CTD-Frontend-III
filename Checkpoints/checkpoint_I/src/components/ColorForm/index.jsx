import React, { useState } from 'react';
import './styles.css';

const ColorForm = ({ onColorSubmit }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação para o campo de nome da cor
    if (name.trim().length < 3 || name.trim() !== name) {
      setError('Por favor, verifique os dados inseridos no formulário');
      return;
    }

    // Validação para o campo de código da cor
    if (code.length < 6 || !/\d/.test(code)) {
      setError('Por favor, verifique os dados inseridos no formulário.');
      return;
    }

    setError(''); // Limpa o erro caso não haja mais validação
    onColorSubmit({ name, code });
    setName('');
    setCode('');
  };

  return (
    <div className="color-form-container">
      <h2>Cadastrar Nova Cor</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome da Cor"
        />
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Código da Cor"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ColorForm;
