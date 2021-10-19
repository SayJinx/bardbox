import './App.css';
import Header from './components/header/Header'
import DropdownGame from './components/home/selector/selector.jsx';
import Greeting from './components/home/Greeting';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div>
      <DropdownGame></DropdownGame>
      </div>
      <div className='greetings'>
        <Greeting></Greeting>
      </div>
    </div>

  );

}

export default App;
