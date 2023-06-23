import React, { useContext } from 'react';
import '../App.css';
import LanguageContext from '../context';

const Navbar = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);
  const { text, id } = language;

  const handleLanguageChange = (newLanguage) => {
    handleChangeLanguage(newLanguage);
  };

  return (
    <div className="navbar">
      <p>{text.home}</p>
      <p>{`Idioma atual: ${id}`}</p>
      <div>
        <button onClick={() => handleLanguageChange('english')}>english</button>
        <button onClick={() => handleLanguageChange('portuguese')}>Portuguese</button>
        <button onClick={() => handleLanguageChange('spanish')}>Spanish</button>
      </div>
    </div>
  );
};

export default Navbar;
