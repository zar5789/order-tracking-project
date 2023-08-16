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
      <div></div>
    </>
  );
};
