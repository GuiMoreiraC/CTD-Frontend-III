import React, { useState } from 'react';
import ColorList from './components/ColorList';
import ColorForm from './components/ColorForm';

const App = () => {
  const [colors, setColors] = useState([]);

  const handleColorSubmit = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div>
      <ColorForm onColorSubmit={handleColorSubmit} />
      <ColorList colors={colors} />
    </div>
  );
};

export default App;
