import { Link } from 'react-router-dom';
import { AppBar } from './AppBar';

export const HomePage = () => {
  return (
    <>
      <AppBar></AppBar>
      <div className="header">
        <div className="left-text">เมนูที่เปิดขาย (มี 25 เมนู)</div>
        <Link to='/menulist' className="right-text">แก้ไขข้อมูลสินค้า</Link>
      </div>
      <div className="button-group">
        <Link to="/front" className='big-rounded-button'><b>Open Store</b></Link>
      </div>
      <p style={{ textAlign: 'center', color: 'black', marginTop: '4px' }}>**กด Open Store เพื่อเริ่มต้นการขาย**</p>
    </>
  );
};
