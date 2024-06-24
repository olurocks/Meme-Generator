import React, { useState } from 'react';
import './App.css';
import RandomMemeGenerator from './components/RandomMemeGenerator';
import CustomMemeGenerator from './components/CustomMemeGenerator';

function App() {
  const [view, setView] = useState('random');

  return (
    <div className="App">
      <header className="App-header">
        <h1>ShyCat Meme Generator</h1>
        <button onClick={() => setView('random')}>Random Meme</button>
        <button onClick={() => setView('custom')}>Custom Meme</button>
      </header>
      {view === 'random' ? <RandomMemeGenerator /> : <CustomMemeGenerator />}
    </div>
  );
}

export default App;
