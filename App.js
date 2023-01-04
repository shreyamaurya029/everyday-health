import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Bmi from './component/Bmi';
import Pulserate from './component/Pulserate';
export default function App(){
  return(
    <main>
      <Navbar />
      <Home />
      <Bmi/>
      <Pulserate />
    </main>
  );
}