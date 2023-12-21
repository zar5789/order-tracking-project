import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.jpg";
import Cart from "../assets/cart.jpg";
import Logo from "../assets/logo.jpg";
import Goback from "../assets/goback.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const FavoriteMenus = () => {
  const navigate = useNavigate();
  const [isManageMode, setIsManageMode] = useState(false);

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const handleManageClick = () => {
    setIsManageMode(!isManageMode);
  };

  const manageButtonStyles = {
    background: "none",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    width: "80px",
    color: isManageMode ? "white" : "#FF3A3A",
  };

  const FavMenus = [
    {
      id: 1,
      name: "กระเพราหมูกรอบไข่ดาว",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 3,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอว",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    // Add more items as needed
  ];
  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <button
          onClick={handleGoBack}
          style={{
            textDecoration: "none",
            marginLeft: "3%",
            marginRight: "-60%",
            marginBottom: "-1%",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={Goback}
            alt="Go back"
            style={{ marginRight: "8px", width: "28px", height: "28px" }}
          />
        </button>
        <h5 style={{ marginTop: "2%", textAlign: "left", marginLeft: "150px" }}>
          My Favorite Menu
        </h5>
        <div className="right-elements">
          <div className="elements-container">
            <button style={manageButtonStyles} onClick={handleManageClick}>
              {isManageMode ? "Cancel" : "Manage"}
            </button>
          </div>
        </div>
      </div>
      <div className="store-container">
        <Link to={'/menufea1'} className="store-link">
          <div
            className="menus-card"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <img src={Logo} alt="custom menu"></img>
            <p>เมนูตามสั่ง(พิมพ์ด้วยตัวเอง)</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Custom price</p>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
              >
                <img
                  src={Cart}
                  alt="Cart"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            </div>
          </div>
        </Link>
        {FavMenus.map((menu) => (
          <Link to={"/menufea2"} key={menu.id} className="store-link">
            <div
              className="menus-card"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              <img src={menu.image} alt={menu.name} />
              <p>{menu.name}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{menu.price} บาท</p>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "5px",
                  }}
                >
                  <img
                    src={Cart}
                    alt="Cart"
                    style={{ width: "30px", height: "30px" }}
                  />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
