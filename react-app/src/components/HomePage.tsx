import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MyAppBar from "./AppBar";
import TabBar from "./Tabbar";
import Cart from "../assets/cart.jpg";

type Store = {
  _id: string;
  name: string;
  store_img_url: string;
  bank_name: string;
  owner_name: string;
  card_num: number;
  qr_img_url: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type FavoriteFood = {
  id: number;
  name: string;
  store: string;
  image: string;
};

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [stores, setStores] = useState<Store[]>([]);
  const [favoriteFoods, setFavoriteFoods] = useState<FavoriteFood[]>([]);

  useEffect(() => {
    // Fetch store data from the API
    const fetchStores = async () => {
      try {
        const response = await fetch(
          "https://order-api-patiparnpa.vercel.app/stores/"
        );
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    fetchStores();
  }, []);

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

          const productDetailsPromises = productIDs.map(
            async (productId: string) => {
              const productResponse = await fetch(
                `https://order-api-patiparnpa.vercel.app/products/${productId}`
              );
              if (productResponse.ok) {
                const productData = await productResponse.json();

                // Find the corresponding store details
                const storeDetails = stores.find(
                  (store) => store._id === productData.store_id
                );

                return {
                  id: productData._id,
                  name: productData.name,
                  store: storeDetails?.name || "Unknown Store", // Use store name, or 'Unknown Store' if not found
                  image: productData.product_img_url,
                  tag: productData.product_tag,
                  price: productData.price,
                };
              }
              return null; // Handle error case
            }
          );

          const productDetails = await Promise.all(productDetailsPromises);

          const filteredProductDetails = productDetails.filter(Boolean);

          setFavoriteFoods(filteredProductDetails);
        } else {
          console.error(
            "Error fetching favorite products:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteFoods();
  }, [stores]);

  return (
    <>
      <MyAppBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 5%",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Favorite Food</p>
        <p
          onClick={() => navigate("/favmenu")}
          style={{
            textDecoration: "none",
            color: "#2357A5",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          See all
        </p>
      </div>
      <div className="scroll-container">
        {favoriteFoods.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginLeft: "50px",
            }}
          >
            User does not have favorite food.
          </p>
        ) : (
          favoriteFoods.map((food) => (
            <div
              key={food.id}
              className="food-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/menufea2/${food.id}`)}
            >
              <img src={food.image} alt={food.name} />
              <p>{food.name}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{food.store}</p>
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
          ))
        )}
      </div>
      <div style={{ margin: "4% 5%" }}>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>เลือกร้านค้า</p>
        <div className="store-container">
          {stores.map((store) => (
            <div className="store-card" key={store._id}>
              <div
                onClick={() =>
                  navigate(`/menupage/${store._id}`, {
                    state: { storeName: store.name },
                  })
                }
                className="store-link"
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                <img src={store.store_img_url} alt={store.name} />
                <p>{store.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <TabBar />
    </>
  );
};
