//import "../styles/index.css";
import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedPalettes';

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;