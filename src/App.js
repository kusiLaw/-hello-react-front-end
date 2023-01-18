import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Greetings from './components/greetings';

const App = () => (
  <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  </>

);

export default App;
