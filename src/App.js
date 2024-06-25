import React, { useState } from 'react';
import './App.css';
import RandomMemeGenerator from './components/RandomMemeGenerator';
import CustomMemeGenerator from './components/CustomMemeGenerator';

function App() {
  const [view, setView] = useState('random');

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-content">
        <h1>Meme Generator</h1>
        <div className="button-group">
          <button className='btn-head' onClick={() => setView('random')}>Random Meme</button>
          <button className='btn-head' onClick={() => setView('custom')}>Custom Meme</button>
        </div>
        {view === 'random' ? <RandomMemeGenerator /> : <CustomMemeGenerator />}
      </div>
    </div>
  );
}

export default App;
