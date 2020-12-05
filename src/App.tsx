import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './App.css'
import { AboutArtist } from './pages/AboutArtist';
import { Home } from './pages/Home';
import { Search } from './pages/Search';

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className="app-title"><Link to="/">ROOM4 Task</Link></h1>
        <main className="app-main">
          <div className="wrapper">
            <Switch>
              <Route path="/artist/:id">
                <AboutArtist />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
