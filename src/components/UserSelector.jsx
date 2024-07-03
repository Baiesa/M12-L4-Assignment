import React, { useCallback } from 'react';

const UserSelector = ({ users, onSelectUser }) => {
  const handleUserSelect = useCallback((event) => {
    onSelectUser(event.target.value);
  }, [onSelectUser]);

  return (
    <select onChange={handleUserSelect}>
      {users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
      ))}
    </select>
  );
};

export default UserSelector;