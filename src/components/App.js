import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import "../styles/index.css";
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedPalettes from './seedPalettes';
import { genPalette } from './colorHelpers';

class App extends Component {
  /** Function takes palette ID and URL and return the correct match */
  findPalette(id) {
    return seedPalettes.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={genPalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={genPalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
      //      <div>
      //        <Palette palette={genPalette(seedPalettes[4])} />
      //      </div>
    );
  }
}

export default App;