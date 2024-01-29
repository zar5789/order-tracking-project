import TabBar from "./Tabbar";
import { Link } from "react-router-dom";
import Goback from "../assets/goback.png";
import { useState } from "react";
import { HeartButton } from "./Heartbutton";
import { useNavigate } from "react-router-dom";

export const SelectMenuFeature2 = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <button
          onClick={handleGoBack}
          style={{
            textDecoration: "none",
            marginLeft: "3%",
            marginRight: "-60%",
            marginBottom: "-1%",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={Goback}
            alt="Go back"
            style={{ marginRight: "8px", width: "28px", height: "28px" }}
          />
        </button>
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}></h5>
        <div className="right-elements">
          <div className="elements-container">
            <HeartButton></HeartButton>
          </div>
        </div>
      </div>
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
              <p style={{fontSize:'22px'}}><b>กระเพราหมูกรอบไข่ดาว 2 ฟอง</b></p>
              <p style={{fontSize:'18px'}}><b>90 Bath</b></p>
            </div>
          </div>
          <div className="menu-form-detail">
            <p style={{ fontWeight:'bold', fontSize:'18px'}}>Note to store</p>
            <input
              type="text"
              placeholder="Message"
              className="menu-input"
            />
            <p style={{ fontSize: "14px" }}>*Enter your note to store here(optional)</p>
            <br></br>
            <div className='menu-amount-option'>
              <button onClick={handleDecrement}>-</button>
              <p>{quantity}</p>
              <button onClick={handleIncrement}>+</button>
            </div>
            <div className="menu-buttons">
              <button className="menu-button">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
