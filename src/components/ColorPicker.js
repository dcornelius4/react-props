import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
  redButton = () => {
    console.log('red');
  }

  greenButton = () => {
    console.log('green');
  }

  blueButton = () => {
    console.log('blue');
  }

  render() {
    return (
      <>
        <button onClick={this.redButton}>Red</button>
        <button onClick={this.greenButton}>Green</button>
        <button onClick={this.blueButton}>Blue</button>
      </>
    );
  }
};