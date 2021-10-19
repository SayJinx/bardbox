import './App.css';
import Header from './components/header/Header'
import DropdownGame from './components/home/selector/selector.jsx';
import Greeting from './components/home/Greeting';
import Tube from './components/home/tube/Tube';

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
        <Tube />
      </div>
    </div>

  );

}

export default App;
