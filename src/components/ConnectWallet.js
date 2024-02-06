// src/components/ConnectWallet.js
import React from 'react';
import { ethers } from 'ethers';

const ConnectWallet = ({ setAccount }) => {
    const connectWalletHandler = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (err) {
                console.error(err);
            }
        } else {
            alert('MetaMask not found. Please install it to use this app.');
        }
    };

    return (
        <button onClick={connectWalletHandler}>Connect Wallet</button>
    );
};

export default ConnectWallet;
