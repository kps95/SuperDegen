// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import './../App.css'
import { Link } from 'react-router-dom';

const WhitePaper = () => {
  return (
    <div>
       <header className="App-header">
      <h2>White Paper</h2>
      <p>Executive Summary The Ultimate Super Bowl NFT Showdown is a groundbreaking project that merges the thrill of the NFL's Super Bowl with the innovative world of Non-Fungible Tokens (NFTs). This project is designed to celebrate the excitement of the Super Bowl by offering fans an opportunity to engage in a friendly competition that rewards their loyalty and support for their favorite team. By participating, fans not only immortalize their support through blockchain technology but also stand a chance to win significant rewards if their team emerges victorious in the Super Bowl </p>
      <p>Project Overview The Ultimate Super Bowl NFT Showdown consists of two separate NFT collections, each representing one of the two NFL teams competing in the upcoming Super Bowl. Each collection comprises 2024 unique NFTs, meticulously crafted to capture the spirit, heritage, and valor of the respective teams </p>
      {/* <p>Collection MechanicsCollection Size: Each team's collection will have a total of 2024 NFTs.Minting Period: Fans can mint NFTs starting from the announcement date up until the day before the Super Bowl.Holding Period: To qualify for rewards, participants must hold at least 5 NFTs from one collection from the minting period until the end of the Super Bowl.Victory Condition: The rewards will be distributed to holders of the winning team's NFT collection. </p> */}
      <p>Reward Structure Payout Pool: A dedicated payout pool will be established, funded by the minting fees and secondary market royalties. Eligibility: Only participants holding 5 or more NFTs of the winning team's collection by the end of the Super Bowl will qualify for the reward. Distribution: The total payout pool will be evenly distributed among the first 400 eligible wallets, based on a snapshot taken at the conclusion of the Super Bowl. Determination of Payout Pool: The larger amount between the total minting wallet and secondary market royalties will be used as the payout pool. </p>
      <p>Secondary Market Royalties: A fixed percentage of all secondary market sales will be allocated to the project's payout pool, increasing the total reward for the winning team's holders. Liquidity and Trading: We aim to foster an active secondary market, providing liquidity and trading opportunities for participants wishing to collect, trade, or sell their NFTs.</p>
      {/* <p>Technical Details Blockchain Technology: The project is built on the Ethereum blockchain, ensuring transparency, security, and immutability of ownership and transactions. Smart Contracts: Custom smart contracts govern the minting process, holding period verification, and reward distribution, ensuring fairness and automation. </p> */}
      {/* <p>Timeline Minting Start Date: [Insert Date] Minting End Date: The day before the Super Bowl Super Bowl Date: [Insert Date] Reward Distribution Date: Within 7 days after the Super Bowl</p> */}
      {/* <p> Participation Guide Minting: Participants can mint NFTs through our official website, [Insert Website URL]. Holding: Participants must hold their NFTs in their wallets without transferring them until the end of the Super Bowl to be eligible for rewards. Verification: Eligibility for rewards will be verified through a blockchain snapshot taken at the conclusion of the Super Bowl.</p> */}
      <p>Conclusion The Ultimate Super Bowl NFT Showdown is more than just a project; it's a celebration of fandom, competition, and the innovative potential of NFT technology. It offers fans a unique way to connect with their favorite teams, celebrate their victories, and potentially earn rewards for their loyalty and support. Join us in this exciting journey to bridge the gap between traditional sports fandom and the digital future. to this </p>
      <p>P.S. This isn’t just about winning; it’s about being part of web3 history. We’re not just building a community; we’re crafting a legacy. One mint at a time, we’re taking the degen spirit straight to the blockchain Super Bowl. Are you in?</p>
      <Link to="/mint"><button>Mint Your NFT</button></Link>
    </header>

    </div>
  );
};

export default WhitePaper;
