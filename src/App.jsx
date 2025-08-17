import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  return (
    <>
    <header className='header'>
      <h1>Pokedéx</h1>
    </header>


    <div className='main-container'>
      {Array.from({ length: 1 }).map((_, index) => (
        <PokemonCard key={index} id={index + 252} />
      ))}
    </div>
    </>
  );

}

export default App
