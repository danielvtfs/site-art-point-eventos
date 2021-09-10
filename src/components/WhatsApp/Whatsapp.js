import './whatsapp.css';
import { FaWhatsapp } from 'react-icons/fa';
function WhatssApp() {
  return (
    <a
      href="https://web.whatsapp.com/send?phone=+5521970448540"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatssApp;
