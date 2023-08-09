/*type RecentOrderProp {
  shopName: string
  price: string
  date: string
  MenuStatus: string
}*/

export const RecentOrder = () => {
  return (
    <>
    <h5>Recent</h5>
    <div className="order-detail-box">
      <div className="order-shop">ร้านพี่ช้าง</div>
      <div className="order-price">Price: 50 บาท</div>
      <div className="order-date">Date: 2023-08-10</div>
      <div className="order-status">Menu Status: Completed</div>
    </div>
    <div className="order-detail-box">
      <div className="order-shop">ร้านพี่ช้าง</div>
      <div className="order-price">Price: 50 บาท</div>
      <div className="order-date">Date: 2023-08-10</div>
      <div className="order-status">Menu Status: Completed</div>
    </div>
    <div className="order-detail-box">
      <div className="order-shop">ร้านพี่ช้าง</div>
      <div className="order-price">Price: 50 บาท</div>
      <div className="order-date">Date: 2023-08-10</div>
      <div className="order-status">Menu Status: Completed</div>
    </div>
    </>
  );
};

