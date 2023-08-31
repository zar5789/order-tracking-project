import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    <>
      <div className="app-bar">
        <h5>IT Cafeteria</h5>
        <div className="right-elements">
          <div className="buttons">
            <Link to="/" className="back-button">
              ย้อนกลับ
            </Link>
          </div>
          <div className="customer-picture"></div>
        </div>
      </div>
    </>
  );
};
