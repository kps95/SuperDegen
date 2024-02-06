// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import './../App.css'
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';


const HomePage = () => {
  return (
    <div>
       <header className="App-header">
      <h2>Welcome to the Super Degen Bowl 2024</h2>
      <p>Yo, Degens! 🎩✨ Ready to flip the script on traditional fandom? Welcome to the only showdown where diamond hands and NFT flips bring you closer to the end zone than ever before. Forget Vegas odds and dusty collectibles; we’re here to redefine the game – web3 style.</p>
      <p>Here in the Ultimate Super Bowl NFT Showdown, we’re all about that blockchain hustle. Think of it as fantasy football meets the metaverse, where your plays can actually pay. So, stash those rabbit's feet and four-leaf clovers; your strategy and loyalty are about to get MVP status.</p>
      <p>Mint Madness: Jumpstart the frenzy by minting our ultra-rare, Super Bowl-inspired NFTs. Whether you're rallying behind Team KC or SF, it's time to show up and glow up in true degen fashion.</p>
      <p>HODL to Victory: Clutch those NFTs tighter than a third-down conversion. Keep at least 5 in your digital wallet from mint to Super Bowl whistle and watch the play unfold.</p>
      <p>Score Big: If your squad takes home the Lombardi, so could you. We're not just tossing around rewards; we're making it rain with a purpose.</p>
      <p>Payout Pool Party: Fueled by minting magic and secondary sales' sizzle, our reward pool is here to redistribute the wealth, degen-style. First 400 eligible wallets get to take a victory lap – in ETH.</p>
      <Link to="/mint"><button>Mint Your NFT</button></Link>
      <CountdownTimer />

      <Link to="/whitepaper"><button> read more you mint</button></Link>
    </header>
    </div>
  );
};

export default HomePage;
