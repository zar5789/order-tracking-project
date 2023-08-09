function FavoriteMenu() {
    return (
      <>
        <h5>Favorite Menu</h5>
        <div style={{ display: 'flex',width: "100%"}}>
          <div className="card" style={{ width: "auto", marginRight: '1rem' }}>
            <img
              src="https://s359.kapook.com/pagebuilder/2cc482f6-9e80-488f-9e0a-87103f16b40d.jpg"
              className="card-img-top"
              alt="..."
              style={{ maxWidth: '70%', height: "auto", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">กระเพราหมูหรอบ ไข่ดาว 3 พอง</h5>
              <p className="card-text">50 บาท</p>
              <h5>ร้านพี่ช้าง</h5>
              <a href="#" className="btn btn-primary">
                Order
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "auto", marginRight: '1rem' }}>
            <img
              src="https://s359.kapook.com/pagebuilder/2cc482f6-9e80-488f-9e0a-87103f16b40d.jpg"
              className="card-img-top"
              alt="..."
              style={{ maxWidth: '70%', height: "auto", margin: "auto"}}
            />
            <div className="card-body">
              <h5 className="card-title">กระเพราหมูหรอบ ไข่ดาว 3 พอง</h5>
              <p className="card-text">50 บาท</p>
              <h5>ร้านพี่ช้าง</h5>
              <a href="#" className="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  

export default FavoriteMenu;
