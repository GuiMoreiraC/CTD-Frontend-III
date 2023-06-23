import './App.css';
import React, { useState } from 'react';
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const [language, setLanguage] = useState(languages.english);

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(languages[newLanguage]);
  };

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
