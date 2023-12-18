import MyAppBar from "./AppBar";
import TabBar from "./Tabbar";
import Cart from "../assets/cart.jpg";
import { Link } from "react-router-dom";

export const HomePage = () => {
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
      id: 2,
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
      id: 3,
      name: "ร้านพี่ช้าง",
      image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg",
    },
    {
      id: 3,
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
        <Link
          to="/favmenu"
          style={{ textDecoration: "none", color: "#2357A5", fontSize: "18px" }}
        >
          <p>See all</p>
        </Link>
      </div>
      <div className="scroll-container">
        {favoriteFoods.map((food) => (
          <div key={food.id} className="food-card">
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
            <Link
              to={`/menupage`}
              key={store.id}
              className="store-link"
            >
              <div className="store-card">
                <img src={store.image} alt={store.name} />
                <p>{store.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <TabBar />
    </>
  );
};
