import './App.css'
import React from 'react'
import CityCard from './components/CityCard' // Importando o novo componente
import citiesData from './components/cities.json' // Importando os dados das cidades

function App() {
  const brazilianCities = citiesData.cities.filter(city => city.country === 'BRA') // Filtrando apenas as cidades brasileiras

  return (
    <div className="App">
      <React.Fragment>
        {brazilianCities.map(city => (
          <CityCard key={city.id} city={city} /> // Renderizando o componente CityCard para cada cidade brasileira
        ))}
      </React.Fragment>
    </div>
  )
}

export default App
