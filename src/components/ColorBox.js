import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/ColorBox.css';

/** Component contains Each Color in a box  */
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  /** When a colorbox is clicked on to copy, onCopy will be called, sets copy true, wait 1500ms and sets back to false */
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className='ColorBox'>
          <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied</h1>
            <p>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          <span className='see-more'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
