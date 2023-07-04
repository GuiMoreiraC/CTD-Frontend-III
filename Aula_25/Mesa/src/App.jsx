import './App.css';
import React from 'react';
import Dog from './Dog';
import ErrorBoundary from './errors/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Dog breed={"husky"} /> {/* Caso de sucesso na API */}
        <Dog breed={"ruffles"} /> {/* Caso de erro na API */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
