import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
      <footer className="d-flex justify-content-center p-3">
        <a 
          href="https://www.facebook.com/vrparallevar/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={['fab', 'facebook']}
            size="lg" 
            className="mx-1 text-white"
          />
        </a>
        <a 
          href="https://instagram.com/vrparallevar" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={['fab', 'instagram']}
            size="lg" 
            className="mx-2 text-white"
          />
        </a>
        <a 
          href="https://google.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={['fab', 'twitter']}
            size="lg" 
            className="mx-1 text-white"
          />
        </a>
      </footer>
    )
}

export default Footer;