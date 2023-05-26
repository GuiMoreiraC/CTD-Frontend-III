import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `O item ${items.length + 1} foi adicionado à lista!`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Adicionar Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
