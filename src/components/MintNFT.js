// src/components/MintNFT.js
import React from 'react';
//import { ethers } from 'ethers';
 import contractABI from '../web3/contractAbi.json';
// import contractAddress from '../contractAddress.json';
const ethers = require("ethers")


const contractaddy = 0x02123c8801c30f70866fe638a4029def630112D0;

const MintNFT = ({ account }) => {
    const mintNftHandler = async () => {
        if (window.ethereum && account) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractaddy, contractABI, signer);

            try {
                const response = await nftContract.mint(1, { value: ethers.utils.parseEther("0.003") });
                console.log('Minting response:', response);
            } catch (err) {
                console.error('Error:', err);
            }
        } else {
            alert('Please connect your wallet.');
        }
     };

    return (
        <button onClick={mintNftHandler}>Mint NFT</button>
    );
};

export default MintNFT;
