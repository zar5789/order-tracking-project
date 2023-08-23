import { Link } from 'react-router-dom';

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
            <b>IT Cafeteria</b> | <Link to='/front'>หน้าร้าน</Link> | <Link to='/back'>ครัว</Link>
          </h5>
        </div>
        <div className="right-elements">
          <div className="buttons">
            <Link to='/' className="back-button">ย้อนกลับ</Link>
          </div>
          <div className="customer-picture"></div>
        </div>
      </div>
      <div className="back-store-page">
        <br></br>
        <h2>รายการอาหาร</h2>
        <table className="food-order-table">
          <thead>
            <tr>
              <th>รายการอาหาร</th>
              <th>จำนวน</th>
            </tr>
          </thead>
          <tbody>
            {foodOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.foodName}</td>
                <td>{order.quantity} จาน</td>
              </tr>
            ))}
          </tbody>
          <tr>
            <th><button className="finish-button">เสร็จสิ้น</button></th>
            <th></th>
          </tr>
        </table>
      </div>
    </>
  );
};