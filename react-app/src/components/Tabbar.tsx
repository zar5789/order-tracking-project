import { Link } from 'react-router-dom';

const TabBar: React.FC = () => {
    return (
      <div className="tab-bar">
        <Link to="/" className="tab-item">
          Home
        </Link>
        <Link to="/order" className="tab-item">
          Order
        </Link>
        <Link to="/menu" className='tab-item'>Menu</Link>
        <Link to='/menufea1' className='tab-item'>MenuFea</Link>
        <Link to='/menufea2' className='tab-item'>MenuFea2</Link>
        <Link to='/login' className='tab-item'>Log In</Link>
      </div>
    );
  };
  
  export default TabBar;