import './App.css'
import React from 'react';

const Greeting = ({ name, children }) => {
  return (
    <>
      {children} {name}.
    </>
  );
};

const App = () => {
  return (
    <>
      <h1><Greeting name="Guilherme">Hello</Greeting></h1>
    </>
  );
};

export default App;
