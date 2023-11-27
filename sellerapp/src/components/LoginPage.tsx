import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="app-bar">
        <div className="title">
          <h5 style={{ color: "#FFFFFF" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
              IT Cafeteria
            </Link>
          </h5>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="centered-container">
        <div className="store-setting-container">
          <h4
            style={{
              textAlign: "center",
              padding: "0 100px",
              maxWidth: "100%",
              whiteSpace: 'nowrap'
            }}
          >
            เข้าสู่ระบบเพื่อเริ่มต้นใช้งาน
          </h4>
          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "25px",
            }}
          >
            กรอกหมายเลขโทรศัพท์และรหัสผ่านเพื่อเข้าสู่ระบบ
          </p>
          <form onSubmit={handleSubmit} className="store-setting-form">
            <div className="form-group">
              <input
                type="string"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="form-control"
                style={{ flex: "1", border: '2px solid #ddd' }}
                placeholder="หมายเลขโทรศัพท์"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="string"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="form-control"
                style={{ flex: "1", border: '2px solid #ddd' }}
                placeholder="รหัสผ่าน"
                required
              />
            </div>
            <br />
            <div className="button-group2">
              <button type="submit" className="login-button">
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
