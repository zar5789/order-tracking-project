import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    <>
      <div className="app-bar">
        <Link to='/' style={{textDecoration:'none', color:'#FFFFFF'}}><h5>IT Cafeteria</h5></Link>
        <div className="right-elements">
          <div className="elements-container">
            <div className="customer-picture">
              <img
                src="https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg"
                alt="Customer"
              />
            </div>
            <h5 style={{color:'#FFFFFF'}}>ร้านพี่ช้าง</h5>
            <div className="dropdown">
              <button className="dropdown-button"> &#9660;</button>
              <div className="dropdown-content">
                <Link to="/editstore">แก้ไขข้อมูลร้านค้า</Link>
                <Link to="/menulist">จัดการเมนู</Link>
                <Link to="/report">ดูรายงานการขาย</Link>
                <Link to='/login'>หน้า login</Link>
                <Link to='/admin'>หน้า admin</Link>
                <hr className="divider" />
                <button className="dropdown-link-button">ออกจากระบบ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
