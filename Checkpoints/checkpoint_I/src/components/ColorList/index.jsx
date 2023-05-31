import React from 'react';
import './styles.css';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h2>Lista de Cores</h2>
      <div className="color-list">
        {colors.map((color, index) => (
          <div key={index} className="color-card">
            <div
              className="color-preview"
              style={{ backgroundColor: color.code }}
            ></div>
            <div className="color-info">
              <span className="color-name">{color.name}</span>
              <span className="color-code">{color.code}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorList;
