import TabBar from "./Tabbar";
import Cart2 from "../assets/cart2.png";

export const UserProfilePage = () => {
  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <h5 style={{ marginTop: "3%", marginLeft: "3%" }}>My Profile</h5>
        <div className="right-elements">
          <div className="elements-container">
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            >
              <img
                src={Cart2}
                alt="Cart"
                style={{ width: "33px", height: "33px" }}
              />
            </button>
          </div>
        </div>
      </div>
      <TabBar></TabBar>
    </>
  );
};