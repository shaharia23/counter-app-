import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]); // State for users
  const [filter, setFilter] = useState(''); // State for filter input

  // Fetching user data when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures it runs once when component mounts

  // Filtering users based on the search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User List from API</h1>

      {/* Input to filter users */}
      <input
        type="text"
        placeholder="Search users by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px' }}
      />

      {/* Displaying filtered users */}
      <div>
        {filteredUsers.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
