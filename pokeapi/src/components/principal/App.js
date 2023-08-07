import './styles.css';
import PokeCard from '../poke-card';
import { numeros } from '../../constants/generate-numbers';
import { handleScroll } from '../../constants/generate-numbers';
import { Grid } from '@mui/material';

window.addEventListener('scroll', handleScroll);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          POKEMON
        </p>
      </header>
      <Grid container style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numeros.map(pokemon => (
        <Grid item md={4} sx ={{padding:'3%'}}>
          <PokeCard key={pokemon} pokemonName={pokemon} />
        </Grid>
      ))}
    </Grid>
    </div>
  );
}

export default App;
