import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="tab-bar">
      <Link to="/" className={`tab-item ${location.pathname === '/' ? 'active' : ''}`}>
        Home
      </Link>
      <Link to="/order" className={`tab-item ${location.pathname === '/order' ? 'active' : ''}`}>
        My Order
      </Link>
      <Link to="/menu" className={`tab-item ${location.pathname === '/menu' ? 'active' : ''}`}>
        My Profile
      </Link>
      <Link to='/menupage'>Menu</Link>
    </div>
  );
};

export default TabBar;