
export const RecentOrder = () => {
  const OrderData = [
    {
      orderQueue: "A24",
      storeId: "store1",
      storeName: "ร้านพี่ช้าง",
      OrderDate: "2023-08-10",
      OrderPrice: 30,
      OrderStatus: "OnProcess",
    },
    {
      orderQueue: "A25",
      storeId: "store2",
      storeName: "ร้านพี่เมพ",
      OrderDate: "2023-08-10",
      OrderPrice: 50,
      OrderStatus: "OnProcess",
    },
    {
      orderQueue: "A26",
      storeId: "store3",
      storeName: "ร้านพี่หมี",
      OrderDate: "2023-08-10",
      OrderPrice: 1000,
      OrderStatus: "OnProcess",
    },
  ];
  return (
    <>
      <h5 className="custom-heading"> On Process</h5>
      <div className="my-order-detail-box">
        <div className="my-order-shop">ร้านพี่ช้าง</div>
        <div className="my-order-price">Price: 50 บาท</div>
        <div className="my-order-date">Date: 2023-08-10</div>
        <div className="my-order-status">Menu Status: Completed</div>
      </div>
      <div className="my-order-detail-box">
        <div className="my-order-shop">ร้านพี่ช้าง</div>
        <div className="my-order-price">Price: 50 บาท</div>
        <div className="order-date">Date: 2023-08-10</div>
        <div className="order-status">Menu Status: Completed</div>
      </div>
      <div className="my-order-detail-box">
        <div className="my-order-shop">ร้านพี่ช้าง</div>
        <div className="my-order-price">50 บาท</div>
        <div className="my-order-date">2023-08-10</div>
        <div className="my-order-status">Completed</div>
      </div>
    </>
  );
};
