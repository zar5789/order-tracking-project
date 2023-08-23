import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
      <>
        <div className="app-bar">
          <h5>IT Cafeteria</h5>
          <div className="customer-picture"></div>
        </div>
        <div className="button-container">
          <Link to="/report" className='rounded-button'>See Report</Link>
          <Link to="/editstore" className='rounded-button'>Edit Store</Link>
          <Link to="/menulist" className='rounded-button'>Edit Menu</Link>
        </div>
        <div className="button-group">
          <Link to="/front" className='big-rounded-button'>Open Store</Link>
        </div>
      </>
    );
  };