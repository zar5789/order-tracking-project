import { CurrentOrder } from "./CurrentOrder";
import { IncomingOrder } from "./IncomingOrder";

export const FrontStore = () => {
  return (
    <>
      <div className="app-bar">
        <div className="title">
          <h5>
            <b>IT Cafeteria</b> | หน้าร้าน
          </h5>
        </div>
        <div className="right-elements">
          <div className="buttons">
            <button className="back-button">ย้อนกลับ</button>
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
            <CurrentOrder />
          </div>
        </div>
      </div>
      <div className="front-tab-bar">
        <div className="front-tab" id="front-incoming-tab">
          <button className="btn btn-warning" style={{marginLeft:'-10%'}}>รับคำสั่งซื้อ</button>
          <button className="btn btn-danger" style={{marginLeft:'10%'}}>ปฏิเสธ</button>
        </div>
        <div className="front-tab" id="front-current-tab">
          <button className="front-finish-button">เสร็จสิ้น</button>
        </div>
      </div>

    </>
  );
};
