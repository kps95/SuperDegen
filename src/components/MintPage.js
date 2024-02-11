import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './MintPage.css';
import sb from './red.PNG';
import contractABI from './../web3/contractAbi.json';

const contractAddress = "0x02123c8801c30f70866fe638a4029def630112D0";

const MintPage = () => {
  const [account, setAccount] = useState(null);
  const [mintQuantity, setMintQuantity] = useState(1); // State to track mint quantity

  // Function to connect wallet
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable(); // Request account access
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  useEffect(() => {
    connectWalletHandler();
  }, []);

  const mintNFT = async (team) => {
    if (window.ethereum && account) {
      const web3 = new Web3(window.ethereum);
      const nftContract = new web3.eth.Contract(contractABI, contractAddress);
      try {
        await nftContract.methods.mint(mintQuantity).send({ 
          from: account, 
          value: web3.utils.toWei((0.003 * mintQuantity).toString(), "ether") 
        });
        console.log(`${team} Minting successful`);
      } catch (err) {
        console.error('Error:', err);
      }
    } else {
      alert('Please connect your wallet.');
    }
  };

  return (
    <>
      <div className="mintPage">
        <h1>Mint Your NFT</h1>
        <label>
          Quantity: 
          <input 
            type="number" 
            value={mintQuantity} 
            onChange={(e) => setMintQuantity(Math.min(Math.max(1, parseInt(e.target.value)), 5))} 
            min="1" 
            max="5" 
          />
        </label>
        <div className="mintOptions">
          <div className="mintBox kcBox">
            <h2>KC</h2>
            <button >Mint KC NFT</button>
          </div>
          <div className="mintBox sfBox">
            <h2>SF</h2>
            <button >Mint SF NFT</button>
          </div>
        </div>
      </div>

      <div className="imageContainer">
        <img src={sb} alt="Super Bowl Showdown" />
      </div>
    </>
  );
};

export default MintPage;
