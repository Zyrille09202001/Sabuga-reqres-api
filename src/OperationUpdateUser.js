import React from 'react';

const OperationUpdateUser = ({ editedUser, setEditedUser, handleUpdateUser, handlePartialUpdateUser }) => {
  return (
    <div className="operation">
      <h2>Update User</h2>
      <div className="input-container">
        <input
          type="number"
          placeholder="User ID"
          value={editedUser.id || ''}
          onChange={(e) => setEditedUser({ ...editedUser, id: parseInt(e.target.value) })}
        />
        <input
          type="text"
          placeholder="First Name"
          value={editedUser.first_name || ''}
          onChange={(e) => setEditedUser({ ...editedUser, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={editedUser.last_name || ''}
          onChange={(e) => setEditedUser({ ...editedUser, last_name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={editedUser.email || ''}
          onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
        />
        <button onClick={handleUpdateUser}>Update User</button>
        <button onClick={handlePartialUpdateUser}>Partial Update</button>
      </div>
    </div>
  );
};

export default OperationUpdateUser;
