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
        <Link to="/menufea1" className='tab-item'>Menu_fea</Link>
        <Link to="/menufea2" className='tab-item'>Menu_fea2</Link>
        
      </div>
    );
  };
  
  export default TabBar;