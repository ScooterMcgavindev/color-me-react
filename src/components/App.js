//import "../styles/index.css";
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { genPalette } from './colorHelpers';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette List Here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>Single Palette</h1>} />
      </Switch>
      //      <div>
      //        <Palette palette={genPalette(seedPalettes[4])} />
      //      </div>
    );
  }
}

export default App;