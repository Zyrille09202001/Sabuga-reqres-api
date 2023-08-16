import React from 'react';

const OperationCreateUser = ({ newUser, setNewUser, handleCreateUser }) => {
  return (
    <div className="operation">
      <h2>Create User</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="First Name"
          value={newUser.first_name || ''}
          onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.last_name || ''}
          onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email || ''}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
    </div>
  );
};

export default OperationCreateUser;
