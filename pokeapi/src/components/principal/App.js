import './styles.css';
import PokeCard from '../poke-card';

const pokemonList = [
  '1',
  '4',
  '7',
  '11',
  '14',
  '17',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          POKEMON
        </p>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {pokemonList.map(pokemon => (
        <PokeCard key={pokemon} pokemonName={pokemon} />
      ))}
    </div>
    </div>
  );
}

export default App;
