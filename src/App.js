import "./App.css";
import "./App.scss"
import "./defaults.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "./components/header/Header";
import DropdownGame from "./components/home/selector/selector.jsx";
import ListPull from './components/listpull/Listpull.js';
import Tube from "./components/home/tube/Tube";
import { Route, Switch } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  const [ pId, setPid] = useState();

  return (
    <div className="App">
      <header className="App-header">

        <Header></Header>

      </header>

      <Container>
      <Row>
      <div className="console">

        <Switch>
          <Route exact path="/">
            <Col className='mb-5'>
            <DropdownGame setPid={setPid}></DropdownGame>
            </Col>
            <Col md={7} className='mb-5'>
            {pId && <Tube pId={pId} />}
            </Col>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/playlists">
            <DropdownGame setPid={setPid}></DropdownGame>
            {pId && <ListPull pId={pId} />}
          </Route>
        </Switch>

      </div>
      </Row>
      </Container>
    </div>
  );
}

export default App;
