import './App.css';
import Header from './components/header/Header'
import DropdownGame from './components/home/selector/selector';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>

      <DropdownGame></DropdownGame>

    </div>

  );

}

export default App;
