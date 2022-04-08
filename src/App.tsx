import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
