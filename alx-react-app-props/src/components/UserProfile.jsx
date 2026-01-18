import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
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

      <p style={{ fontStyle: 'italic', color: '#555' }}>
        Bio: Loves hiking and photography
      </p>
    </div>
  );
}

export default UserProfile;
