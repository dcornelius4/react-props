import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

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
      <section className={styles.ColorPicker}>
        <button onClick={this.redButton} className={styles.red}>Red</button>
        <button onClick={this.greenButton} className={styles.green}>Green</button>
        <button onClick={this.blueButton} className={styles.blue}>Blue</button>
      </section>
    );
  }
};