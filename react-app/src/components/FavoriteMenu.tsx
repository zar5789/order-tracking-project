import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";
import Redbin from "../assets/redbin.png";
import Cart from "../assets/cart.jpg";
import Logo from "../assets/logo.jpg";

interface FavoriteFood {
  id: string;
  name: string;
  image: string;
  tag: string;
  price: number;
}

export const FavoriteMenus: React.FC = () => {
  const navigate = useNavigate();
  const [isManageMode, setIsManageMode] = useState(false);
  const [favoriteFoods, setFavoriteFoods] = useState<FavoriteFood[]>([]);

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const handleManageClick = () => {
    setIsManageMode(!isManageMode);
  };

  const manageButtonStyles = {
    background: "none",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    width: "80px",
    color: isManageMode ? "white" : "#FF3A3A",
  };

  const overlayStyles:React.CSSProperties = {
    backgroundColor: "#505050",
    opacity: 0.8,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
  };

  useEffect(() => {
    const fetchFavoriteFoods = async () => {
      try {
        const userId = "650bd1a00638ec52b189cb6e";
        const response = await fetch(
          `https://order-api-patiparnpa.vercel.app/favorite_products/user/${userId}`
        );

        if (response.ok) {
          const favoriteProducts = await response.json();

          const productIDs = favoriteProducts[0]?.productIDs || [];

          const productDetailsPromises = productIDs.map(async (productId:string) => {
            try {
              const productResponse = await fetch(
                `https://order-api-patiparnpa.vercel.app/products/${productId}`
              );

              if (productResponse.ok) {
                const productData = await productResponse.json();

                return {
                  id: productData._id,
                  name: productData.name,
                  image: productData.product_img_url,
                  tag: productData.product_tag,
                  price: productData.price,
                };
              } else {
                console.error("Error fetching product details:", productResponse.statusText);
                return null;
              }
            } catch (error) {
              console.error("Error fetching product details:", error);
              return null;
            }
          });

          const productDetails = await Promise.all(productDetailsPromises);
          const filteredProductDetails = productDetails.filter(Boolean) as FavoriteFood[];

          setFavoriteFoods(filteredProductDetails);
        } else {
          console.error("Error fetching favorite products:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteFoods();
  }, []);

  return (
    <>
      <div className="app-bar" style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
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
        <h5 style={{ marginTop: "2%", textAlign: "left", marginLeft: "150px" }}>
          My Favorite Menu
        </h5>
        <div className="right-elements">
          <div className="elements-container">
            <button style={manageButtonStyles} onClick={handleManageClick}>
              {isManageMode ? "Cancel" : "Manage"}
            </button>
          </div>
        </div>
      </div>
      <div className="store-container">
        {favoriteFoods.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>User does not have favorite menu.</p>
        ) : (
          favoriteFoods.map((food) => (
            <div
              key={food.id}
              className="menus-card"
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                position: "relative",
              }}
            >
              {isManageMode ? (
                <button
                  className="store-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle button click logic here
                    console.log("Button clicked");
                  }}
                ></button>
              ) : (
                <div
                  onClick={() => navigate("/menufea2")}
                  className="store-link"
                  style={{ cursor: "pointer" }}
                >
                  <img src={food.image} alt={food.name} />
                  <p>{food.name}</p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>{food.price} บาท</p>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        marginLeft: "5px",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Button clicked!");
                      }}
                    >
                      <img
                        src={Cart}
                        alt="Cart"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </button>
                  </div>
                </div>
              )}
              {isManageMode && (
                <div
                  style={overlayStyles}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Overlay clicked");
                  }}
                >
                  <img
                    src={Redbin}
                    alt="Redbin"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "73px",
                      height: "95px",
                    }}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};
