import React from 'react'
import {Routes, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'

//Components
import GlobalStyles from './components/GlobalStyles'


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
