import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedPalettes from './seedPalettes';
import NewPaletteForm from './NewPaletteForm';
import { genPalette } from './colorHelpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettes: savedPalettes || seedPalettes };
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}
	/** Function takes palette ID and URL and return the correct match */
	findPalette(id) {
		return this.state.palettes.find(function(palette) {
			return palette.id === id;
		});
	}
	deletePalette(id) {
		this.setState(
			(st) => ({ palettes: st.palettes.filter((palette) => palette.id !== id) }),
			this.syncLocalStorage
		);
	}
	savePalette(newPalette) {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, this.syncLocalStorage);
	}
	syncLocalStorage() {
		// save palettes to local storage
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	}
	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames="fade" timeout={500}>
							<Switch location={location}>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<div className="page">
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={this.state.palettes}
												{...routeProps}
											/>
										</div>
									)}
								/>
								<Route
									path="/palette/:paletteId/:colorId"
									render={(routeProps) => (
										<div className="page">
											<SingleColorPalette
												colorId={routeProps.match.params.colorId}
												palette={genPalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										<div className="page">
											<PaletteList
												palettes={this.state.palettes}
												deletePalette={this.deletePalette}
												{...routeProps}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path="/palette/:id"
									render={(routeProps) => (
										<div className="page">
											<Palette
												palette={genPalette(this.findPalette(routeProps.match.params.id))}
											/>
										</div>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>

			//      <div>
			//        <Palette palette={genPalette(seedPalettes[4])} />
			//      </div>
		);
	}
}

export default App;
