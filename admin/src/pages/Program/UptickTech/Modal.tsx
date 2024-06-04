
import React from "react";
import Close from "../../../assets/close.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-70">
      <div className="bg-white p-16 shadow-md w-3/5">
        <button className="fixed top-36 right-96 text-white" onClick={onClose}>
          <img src={Close} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
