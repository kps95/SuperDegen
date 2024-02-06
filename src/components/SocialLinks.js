import React from 'react';
import './SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faEthereum} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://twitter.com/degenbowler?s=21" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://etherscan.io/address/yourContractAddress" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEthereum} size="2x" />
      </a>
      {/* <a href="https://opensea.io/collection/yourCollectionName" target="_blank" rel="noopener noreferrer"> */}
        {/* Since FontAwesome doesn't directly offer an OpenSea icon, use a related or custom icon */}
        {/* <FontAwesomeIcon icon={faOpensea} size="2x" /> */}
      {/* </a> */}
    </div>
  );
};

export default SocialLinks;
