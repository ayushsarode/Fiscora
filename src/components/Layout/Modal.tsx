// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null; // Prevent rendering if the modal is closed

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
        <p>{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
