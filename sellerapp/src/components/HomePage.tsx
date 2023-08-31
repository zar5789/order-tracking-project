import { Link } from 'react-router-dom';
import { AppBar } from './AppBar';

export const HomePage = () => {
    return (
      <>
        <AppBar></AppBar>
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