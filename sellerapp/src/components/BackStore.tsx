interface FoodOrder {
  foodName: string;
  quantity: number;
}

export const BackStore = () => {
  const foodOrders: FoodOrder[] = [
    { foodName: "กระเพราหมู", quantity: 2 },
    { foodName: "ข้าวผัดไก่", quantity: 3 },
    { foodName: "ต้มยำกุ้ง", quantity: 1 },
  ];
  return (
    <>
      <div className="app-bar">
        <div className="title">
          <h5>
            <b>IT Cafeteria</b> | ครัว
          </h5>
        </div>
        <div className="right-elements">
          <div className="buttons">
            <button className="back-button">ย้อนกลับ</button>
          </div>
          <div className="customer-picture"></div>
        </div>
      </div>
      <div className="back-store-page">
        <h2>Food Orders</h2>
        <div className="food-order-list">
          {foodOrders.map((order, index) => (
            <div className="food-order-item" key={index}>
              <p className="food-name">{order.foodName}</p>
              <p className="quantity">{order.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
