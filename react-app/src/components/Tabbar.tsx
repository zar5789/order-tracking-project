import { Link } from 'react-router-dom';

const TabBar: React.FC = () => {
    return (
      <div className="tab-bar bottom">
        <Link to="/" className="tab-item">
          Home
        </Link>
        <Link to="/order" className="tab-item">
          Order
        </Link>
      </div>
    );
  };
  
  export default TabBar;