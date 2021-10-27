import './App.css';
import './defaults.css'
import React, { useState } from 'react';
import Header from './components/header/Header'
import DropdownGame from './components/home/selector/selector.jsx';
import Greeting from './components/home/Greeting';
import Tube from './components/home/tube/Tube';

function App() {
  const [campaign, setCamp] = useState();
  const [vibe, setVibe] = useState();

//  console.log(campaign);
//  console.log(vibe);

  return (

    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className='console'>
      <DropdownGame setCamp={setCamp} setVibe={setVibe}></DropdownGame>
      {campaign && vibe && <Tube campaign={campaign} vibe={vibe} />}

      </div>
    </div>

  );

}

export default App;
