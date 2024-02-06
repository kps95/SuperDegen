// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MintNFT from './components/MintNFT';
import ConnectWallet from './components/ConnectWallet';

import MintPage from './components/MintPage'; // Assuming you have this component
import HomePage from './components/HomePage'; // Assuming you have this component
import WhitePaper from './components/WhitePaper'
import './App.css';

function App() {

  const [account, setAccount] = useState(null);
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> 
          {/* <Link to="/mint">Mint NFT</Link> */}
        </nav>
        <div className="App">
      
    </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mint" element={<MintPage />} />
          <Route path="/whitepaper" element={<WhitePaper/>} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;
