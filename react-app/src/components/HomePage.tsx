import React from "react";
import { useNavigate } from "react-router-dom";
import MyAppBar from "./AppBar";
import TabBar from "./Tabbar";
import Cart from "../assets/cart.jpg";

export const HomePage = () => {
  const navigate = useNavigate();

  const favoriteFoods = [
    {
      id: 1,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      store: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      store: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 3,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      store: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง",
      store: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    // Add more items as needed
  ];

  const stores = [
    {
      id: 1,
      name: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 3,
      name: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 5,
      name: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    // Add more stores as needed
  ];

  return (
    <>
      <MyAppBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 5%",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Favorite Food</p>
        <p
          onClick={() => navigate("/favmenu")}
          style={{
            textDecoration: "none",
            color: "#2357A5",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          See all
        </p>
      </div>
      <div className="scroll-container">
        {favoriteFoods.map((food) => (
          <div
            key={food.id}
            className="food-card"
            onClick={() => navigate("/menufea2")}
          >
            <img src={food.image} alt={food.name} />
            <p>{food.name}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{food.store}</p>
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
        ))}
      </div>
      <div style={{ margin: "4% 5%" }}>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>เลือกร้านค้า</p>
        <div className="store-container">
          {stores.map((store) => (
            <div className="store-card">
              <p
                onClick={() => navigate("/menupage")}
                key={store.id}
                className="store-link"
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                <img src={store.image} alt={store.name} />
                <p>{store.name}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <TabBar />
    </>
  );
};
