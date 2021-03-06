import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div style={{marginLeft: '10px'}}>
        <Counter/>
        <CurrencyConverter/>
      </div>
    </div>
  );
}

export default App;