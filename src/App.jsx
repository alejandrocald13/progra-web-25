import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Eevee'];
  
  return (
    <>
    <div className='main-container'>
      {pokemons.map((name, i) => (
        <PokemonCard key={i} name={name} />
      ))}
    </div>
    </>
  );

}

export default App
