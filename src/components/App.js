import React from 'react';
import Color from './Color';

export default function App() {
  const name = 'Blood Orange';
  const rgb = {
    red: 209,
    green: 0,
    blue: 28
  };

  return <Color name={name} rgb={rgb} />;
}
