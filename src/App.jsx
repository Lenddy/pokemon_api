import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import Axios from './components/Axios';

function App() {
  return (
    <div className="App">
      <h1> pokemon api</h1>
      {/* <Pokemon></Pokemon> */}
      <Axios></Axios>
    </div>
  );
}

export default App;
