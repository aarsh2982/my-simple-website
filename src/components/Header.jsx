import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem', background: '#333', color: '#fff' }}>
    <nav>
      <Link to="/" style={{ margin: '0 1rem', color: '#fff' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 1rem', color: '#fff' }}>About</Link>
      <Link to="/services" style={{ margin: '0 1rem', color: '#fff' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 1rem', color: '#fff' }}>Contact</Link>
    </nav>
  </header>
);

export default Header;
