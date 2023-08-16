import React from 'react';

const OperationDeleteUser = ({ deletedUserId, setDeletedUserId, handleDeleteUser }) => {
  return (
    <div className="operation">
      <h2>Delete User</h2>
      <div className="input-container">
        <input
          type="number"
          placeholder="User ID"
          value={deletedUserId || ''}
          onChange={(e) => setDeletedUserId(parseInt(e.target.value))}
        />
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>
    </div>
  );
};

export default OperationDeleteUser;
