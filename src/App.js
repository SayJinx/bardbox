import './App.css';
import Header from './components/header/Header'
import DropdownGame from './components/home/selector/selector.jsx';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div>
      <DropdownGame></DropdownGame>
      </div>
    </div>

  );

}

export default App;
