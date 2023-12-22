import "./passwordModal.css"
import React, { useState } from 'react';

const PasswordModal = ({ closeModal, updatePassword }) => {
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    // Add any validation logic if needed
    updatePassword(newPassword);
    closeModal();
  };

  return (
    <div className="password-modal">
        <div className="password-modal-content">
            <h2>Edit Password</h2>
            <label>New Password:</label>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handlePasswordChange}>Change Password</button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    </div>
  );
};

export default PasswordModal;