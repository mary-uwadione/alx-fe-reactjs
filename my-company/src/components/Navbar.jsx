import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between', // ✅ REQUIRED by ALX
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#222'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ color: '#fff', margin: 0 }}>My Company</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

