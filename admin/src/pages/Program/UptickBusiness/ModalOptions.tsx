// ModalOptions.tsx
import React from "react";
import { Link } from "react-router-dom";
import close from "../../../assets/close.png";

interface ModalOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApplication: () => void;
  onCloseApplication: () => void;
  programId: number | null; // Added programId prop
}

const ModalOptions: React.FC<ModalOptionsProps> = ({
  isOpen,
  onClose,
  onOpenApplication,
  onCloseApplication,
  programId,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-end bg-gray-800 bg-opacity-10">
      <div className="bg-white p-4 shadow-md mr-10">
        <button
          className="absolute top-64 right-10 mt-2 text-gray-500"
          onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <div className="flex flex-col space-y-4">
          <button onClick={onOpenApplication}>Open Application</button>
          {programId && (
            <Link to={`/business/${programId}`}>
              <button>View Applicant Details</button>
            </Link>
          )}
          <button onClick={onCloseApplication}>Close Application</button>
        </div>
      </div>
    </div>
  );
};

export default ModalOptions;
