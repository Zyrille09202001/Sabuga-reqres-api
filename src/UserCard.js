import React from 'react';

const UserCard = ({ user }) => (
  <div className="user-card">
    <div className="user-avatar">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    </div>
    <div className="user-details">
      <p className="user-name">{`${user.first_name} ${user.last_name}`}</p>
      <p className="user-email">{user.email}</p>
    </div>
  </div>
);

export default UserCard;
