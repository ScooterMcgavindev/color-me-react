//import "../styles/index.css";
import React, { Component } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { genPalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(genPalette(seedPalettes[4]))
    return (
      <div>
        <Palette palette={genPalette(seedPalettes[4])} />
      </div>
    );
  }
}

export default App;