import { useState } from 'react'
import './App.css'

const App = () => {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(valor)) {
      console.log('Valor é numérico');
    } else {
      console.log('Valor não é numérico');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Valor:
        <input type="text" value={valor} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App
