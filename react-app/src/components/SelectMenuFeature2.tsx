import TabBar from "./Tabbar";

export const SelectMenuFeature2 = () => {
  return (
    <>
      <div className="menu-container">
        <div className="menu-image-container">
          <img
            src="https://s359.kapook.com/pagebuilder/2cc482f6-9e80-488f-9e0a-87103f16b40d.jpg"
            className="menu-img"
            alt="Menu 1"
          />
        </div>
        <div className="menu-container-details">
          <div className="menu-details-content">
            <div className="menu-text">
              <b>กะเพรา</b>
              <p>90 บาท</p>
            </div>
          </div>
          <div className="menu-form-detail">
            <div className="menu-radio-row">
              <p>ใส่ไข่ไหมไอสัส</p>
              <label>
                <input type="radio" value="option1" />
                ใส่
              </label>
            </div>
            <div className="menu-radio-row">
              <label>
                <input type="radio" value="option2" />
                ไม่ใส่
              </label>
            </div>
          </div>
          <div className="menu-form-detail">
            <input
              type="text"
              placeholder="Enter your order details"
              className="menu-input"
            />
            <p style={{ fontSize: "12px" }}>*Enter your order details</p>
            <div className="menu-buttons">
              <button className="menu-button">
                เพิ่มลงตะกร้า+สั่งอาหารเพิ่ม
              </button>
              <button className="menu-button">สั่งทันที</button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <TabBar></TabBar>
    </>
  );
};
