import { useState } from "react";

interface CurrentOrderItem {
  orderQueue: number;
  menuName: string;
  menuQuantity: number;
  menuPrice: number;
  paymentStatus: string;
}

export const CurrentOrder: React.FC = () => {
  const [currentOrders, setCurrentOrders] = useState<CurrentOrderItem[]>([
    {
      orderQueue: 1,
      menuName: "กระเพราหมู",
      menuQuantity: 2,
      menuPrice: 50,
      paymentStatus: "ชำระเงินแล้ว",
    },
    {
      orderQueue: 2,
      menuName: "ข้าวผัดไก่",
      menuQuantity: 3,
      menuPrice: 60,
      paymentStatus: "จ่ายหน้าร้าน",
    },
    {
      orderQueue: 3,
      menuName: "ต้มยำกุ้ง",
      menuQuantity: 1,
      menuPrice: 70,
      paymentStatus: "จ่ายหน้าร้าน",
    },
    {
      orderQueue: 4,
      menuName: "ต้มยำกุ้ง",
      menuQuantity: 1,
      menuPrice: 70,
      paymentStatus: "จ่ายหน้าร้าน",
    },
    {
      orderQueue: 5,
      menuName: "ต้มยำกุ้ง",
      menuQuantity: 1,
      menuPrice: 70,
      paymentStatus: "จ่ายหน้าร้าน",
    }
  ]);

  return (
    <div className="current-order-container">
      <h2 className="current-order-title">ออเดอร์ที่กำลังทำ</h2>
      <div className="current-order-list">
        {currentOrders.map((order, index) => (
          <div className={`current-order-item ${
            order.paymentStatus === "ชำระเงินแล้ว" ? "green-border" : "yellow-border"
          } ${index === 0 ? "first-order" : ""}`} key={index}>
            <h2 className="current-order-queue">{order.orderQueue}</h2>
            <div className="current-menu-details">
              <p className="current-menu-name">{order.menuName}</p>
              <p className="current-menu-quantity">{order.menuQuantity} จาน</p>
            </div>
            <div className="current-payment">
              <p
                className={`current-payment-status ${
                  order.paymentStatus === "ชำระเงินแล้ว" ? "green"  : "red"
                }`}
              >
                {order.paymentStatus === "ชำระเงินแล้ว"
                  ? "ชำระเงินแล้ว"
                  : "จ่ายหน้าร้าน"}
              </p>
              <p className="current-menu-price">{order.menuPrice} บาท</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
