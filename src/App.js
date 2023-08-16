import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [deletedUserId, setDeletedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const api = axios.create({
    baseURL: 'https://reqres.in/api',
  });

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      const response = await api.post('/users', newUser);
      console.log('User created:', response.data);
      fetchUsers();
      setNewUser({});
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await api.put(`/users/${editedUser.id}`, editedUser);
      console.log('User updated:', response.data);
      fetchUsers();
      setEditedUser({});
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handlePartialUpdateUser = async () => {
    try {
      const response = await api.patch(`/users/${editedUser.id}`, editedUser);
      console.log('User partially updated:', response.data);
      fetchUsers();
      setEditedUser({});
    } catch (error) {
      console.error('Error partially updating user:', error);
    }
  };

  const handleDeleteUser = async () => {
    if (!deletedUserId) {
      console.log('Please enter a user ID to delete.');
      return;
    }

    try {
      const response = await api.delete(`/users/${deletedUserId}`);
      console.log('User deleted:', response.data);
      fetchUsers();
      setDeletedUserId(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleViewProfile = (user) => {
    setSelectedUser(user);
  };

  const handleCloseProfile = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container">
      <h1 className="title">Hello ReqRes Users!</h1>

      {/* Create User Section */}
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

      {/* User List */}
      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            </div>
            <div className="user-details">
              <p className="user-name">{`${user.first_name} ${user.last_name}`}</p>
              <p className="user-email">{user.email}</p>
              <button onClick={() => handleViewProfile(user)}>View Profile</button>
            </div>
          </div>
        ))}
      </div>

      {/* Update User Section */}
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

      {/* Delete User Section */}
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

      {/* User Profile */}
      {selectedUser && (
        <div className="profile-overlay">
          <div className="user-profile">
            <div className="user-avatar">
              <img src={selectedUser.avatar} alt={`${selectedUser.first_name} ${selectedUser.last_name}`} />
            </div>
            <div className="user-details">
              <h2>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h2>
              <p className="user-email">{selectedUser.email}</p>
              <button onClick={handleCloseProfile}>Close Profile</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="footer">
        <p>
          &copy; {new Date().getFullYear()} Zyrille's Property. All rights reserved. | Designed by: {' '}
          <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer">
            Zyrille Sabuga
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
