import React, { ReactNode } from "react";
import "../Modal.css"; // Include CSS styles

interface ModalProps {
  isOpen: boolean; // Determines if the modal is visible
  onClose: () => void; // Callback to close the modal
  children: ReactNode; // Content inside the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
