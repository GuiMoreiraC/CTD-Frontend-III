import React from 'react'
import styles from './CityCard.module.css' // Importando o CSS Module

function CityCard({ city }) {
  return (
    <div className={styles['city-card']}>
      <h2>{city.city}</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      <div className={styles['color-box']} style={{ backgroundColor: city.color }}></div>
    </div>
  )
}

export default CityCard
