// PopupComponent.tsx

import React, { useContext } from 'react';
import './PopupComponent.css';
import { PopupContext } from './PopupContext';

interface PopupProps {
  onClose: () => void;
}

const PopupComponent: React.FC<PopupProps> = ({ onClose }) => {
  const contextValue = useContext(PopupContext);

  if (!contextValue) {
    // Handle the case where the context value is undefined
    return null; // or display some default content
  }

  const { popupContent } = contextValue;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {popupContent || getDefaultContent()}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const getDefaultContent = () => (
  <div>
    <p>This is the default content of my popup.</p>
    <p>My name is Peter Grill, and Luffy is my stepdad.</p>
  </div>
);

export default PopupComponent;

