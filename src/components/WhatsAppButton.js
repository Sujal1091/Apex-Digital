import React, { useState } from 'react';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '919515147666'; // Replace with your actual WhatsApp number (country code + number)
const WHATSAPP_MESSAGE = 'Hello! I would like to know more about your services.';

function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      id="whatsapp-floating-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float${hovered ? ' hovered' : ''}`}
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="whatsapp-tooltip">Chat with us!</span>
      <svg
        className="whatsapp-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="24" fill="#25D366" />
        <path
          fill="#fff"
          d="M24 10.5C16.544 10.5 10.5 16.544 10.5 24c0 2.388.636 4.626 1.745 6.557L10.5 37.5l7.196-1.727A13.44 13.44 0 0 0 24 37.5c7.456 0 13.5-6.044 13.5-13.5S31.456 10.5 24 10.5zm0 24.75a11.205 11.205 0 0 1-5.716-1.565l-.41-.244-4.271 1.025 1.05-4.153-.267-.426A11.198 11.198 0 0 1 12.75 24c0-6.213 5.037-11.25 11.25-11.25S35.25 17.787 35.25 24 30.213 35.25 24 35.25zm6.164-8.422c-.337-.169-1.994-.984-2.303-1.097-.308-.112-.533-.169-.757.169-.225.337-.869 1.097-1.066 1.322-.196.225-.393.253-.73.084-.337-.169-1.422-.524-2.708-1.67-.999-.892-1.674-1.993-1.87-2.33-.197-.337-.021-.52.148-.687.152-.151.337-.394.506-.59.169-.197.225-.338.337-.563.113-.225.057-.422-.028-.59-.084-.169-.757-1.826-1.037-2.5-.273-.656-.55-.567-.757-.578l-.645-.011c-.225 0-.59.084-.898.422-.308.337-1.178 1.153-1.178 2.81s1.206 3.26 1.374 3.486c.169.225 2.374 3.623 5.752 5.081.804.347 1.431.554 1.92.709.807.257 1.542.22 2.122.134.648-.097 1.994-.815 2.275-1.602.28-.787.28-1.461.196-1.602-.084-.14-.308-.225-.645-.394z"
        />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
