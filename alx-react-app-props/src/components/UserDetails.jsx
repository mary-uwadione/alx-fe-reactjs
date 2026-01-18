import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '5px' }}>
        {userData.name}
      </h2>
      <p style={{ fontSize: '16px' }}>
        Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span>
      </p>
    </div>
  );
}

export default UserDetails;

