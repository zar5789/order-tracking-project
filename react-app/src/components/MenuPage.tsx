import React from "react";
import { useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";
import Cart from "../assets/cart.jpg";
import Logo from "../assets/logo.jpg";

export const MenuPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const Menus = [
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
      id: 5,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 6,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 7,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      price: 50,
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 8,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
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
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}>ร้านพี่ช้าง</h5>
        <div className="right-elements">
          <div className="elements-container">
            {/* Add other elements as needed */}
          </div>
        </div>
      </div>
      <div className="store-container">
        <div
          className="menus-card"
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          <div
            onClick={() => navigate("/menufea1")}
            className="store-link"
            style={{ cursor: "pointer" }}
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
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Button clicked!");
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
        </div>
        {Menus.map((menu) => (
          <div
            key={menu.id}
            className="menus-card"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          >
            <div
              onClick={() => navigate("/menufea2")}
              className="store-link"
              style={{ cursor: "pointer" }}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Button clicked!");
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
          </div>
        ))}
      </div>
    </>
  );
};
