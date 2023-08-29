import { CurrentOrder } from "./CurrentOrder";
import { IncomingOrder } from "./IncomingOrder";
import { Link } from "react-router-dom";
import { useState } from "react";

export const FrontStore = () => {
  const [selectedOrder, setSelectedOrder] = useState<number | null>(0);
  const MoveUp = () => {
    if (selectedOrder !== null && selectedOrder > 0) {
      setSelectedOrder(selectedOrder - 1);
    }
  };
  const MoveDown = () => {
    if (selectedOrder !== null) {
      setSelectedOrder(selectedOrder + 1);
    }
  };
  return (
    <>
      <div className="app-bar">
        <div className="title">
          <h5>
            <b>IT Cafeteria</b> | <Link to="/front">หน้าร้าน</Link> |{" "}
            <Link to="/back">ครัว</Link>
          </h5>
        </div>
        <div className="right-elements">
          <div className="buttons">
            <Link to="/" className="back-button">
              ย้อนกลับ
            </Link>
            <button className="close-store-button">ปิดร้าน</button>
          </div>
          <div className="customer-picture"></div>
        </div>
      </div>
      <div className="front-order-container">
        <div className="front-order-column">
          <div className="front2-order-container">
            <IncomingOrder />
          </div>
        </div>
        <div className="separator"></div>
        <div className="front-order-column">
          <div className="front2-order-container">
            <CurrentOrder
              selectedOrder={selectedOrder}
              onOrderClick={setSelectedOrder}
            />
          </div>
        </div>
      </div>
      <div className="front-tab-bar">
        <div className="front-tab" id="front-incoming-tab">
          <button className="btn btn-warning" style={{ marginLeft: "-10%" }}>
            รับคำสั่งซื้อ
          </button>
          <button className="btn btn-danger" style={{ marginLeft: "10%" }}>
            ปฏิเสธ
          </button>
        </div>
        <div className="front-tab" id="front-current-tab">
          <button className="front-finish-button">เสร็จสิ้น</button>
          <div className="arrow-buttons">
            <button className="vertical-arrow" onClick={MoveUp}>
              <b>&uarr;</b>
            </button>
            <button className="vertical-arrow" onClick={MoveDown}>
              <b>&darr;</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
