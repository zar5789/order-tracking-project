import MyAppBar from "./AppBar";
import TabBar from "./Tabbar";
import Cart from "../assets/cart.jpg"


export const HomePage = () => {
  const favoriteFoods = [
    { id: 1, name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง", store: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    { id: 2, name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง", store: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    { id: 2, name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง", store: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    { id: 2, name: "กระเพราหมูกรอบไข่ดาว 2 ฟอง", store: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    // Add more items as needed
  ];

  const stores = [
    { id: 1, name: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    { id: 2, name: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    { id: 3, name: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    { id: 3, name: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" },
    { id: 3, name: "ร้านพี่ช้าง", image: "https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg" }
    // Add more stores as needed
  ];
  return (
    <>
      <MyAppBar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 5%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Favorite Food</p>
        <p>See all</p>
      </div>
      <div className="scroll-container">
        {favoriteFoods.map((food) => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.name} />
            <p>{food.name}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{food.store}</p>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '5px' }}>
                <img src={Cart} alt="Cart" style={{ width: '30px', height: '30px' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: '4% 5%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Select Store</p>
        <div className="store-container">
          {stores.map((store) => (
            <div key={store.id} className="store-card">
              <img src={store.image} alt={store.name} />
              <p>{store.name}</p>
            </div>
          ))}
        </div>
      </div>

      <TabBar />
    </>
  );
};

