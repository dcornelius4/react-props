import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  console.log('doggowonderland');
  return (
    <>
      <Header />
      <Dog name="Leroy" age="20" weight="75 lbs" />
    </>
  );
}