import "./App.css";
import "./defaults.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import DropdownGame from "./components/home/selector/selector.jsx";
import Greeting from "./components/home/Greeting";
import ListPull from './components/listpull/Listpull.js';
import Tube from "./components/home/tube/Tube";
import { Route, Switch } from "react-router-dom";

function App() {
  const [ pId, setPid] = useState();

  //  console.log(campaign);
  //  console.log(vibe);

  return (
    <div className="App">
      <header className="App-header">

        <Header></Header>

      </header>
      <div className="console">

        <Switch>
          <Route exact path="/">
            <DropdownGame setPid={setPid}></DropdownGame>
            {pId && <Tube pId={pId} />}
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/playlists">
            <DropdownGame setPid={setPid}></DropdownGame>
            {pId && <ListPull pId={pId} />}
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
