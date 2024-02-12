import React, { useState, ChangeEvent, useEffect } from "react";
import Goback from "../assets/goback.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

interface Item {
  productID: string;
  quantity: number;
  _id: string;
  // Add other properties if needed
}
const PaymentMethodSection: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("payAtStore");

  const handleMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <>
      <div
        className="my-order-detail-box"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        <label>
          <input
            id="payAtStore"
            type="radio"
            value="payAtStore"
            checked={selectedMethod === "payAtStore"}
            onChange={handleMethodChange}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Pay at the Store
        </label>
      </div>
      <div
        className="my-order-detail-box"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        <label>
          <input
            id="scanQRCode"
            type="radio"
            value="scanQRCode"
            checked={selectedMethod === "scanQRCode"}
            onChange={handleMethodChange}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          Scan QR Code
        </label>
      </div>
    </>
  );
};

export const ConfirmOrder: React.FC = () => {
  const navigate = useNavigate();
  const { storeId } = useParams<{ storeId: string }>();
  const location = useLocation();

  const storeName = location.state?.storeName || 'ร้านค้า';

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };
  const [basketData, setBasketData] = useState<any>(null);

  useEffect(() => {
    console.log("basketData:", basketData);
  }, [basketData]); // Log basketData whenever it changes

  useEffect(() => {
    const fetchBasketData = async () => {
      try {
        const response = await fetch(
          `https://order-api-patiparnpa.vercel.app/baskets/65c1e62e550ce4ecba49c6c9`
        );
        if (response.ok) {
          const data = await response.json();

          // Ensure data.items and data.items[storeId] are not undefined
          const itemsForStore =
            data.items && storeId && data.items[storeId]
              ? data.items[storeId]
              : [];

          // Fetch product details for each menu
          const productPromises = itemsForStore.map(async (item: Item) => {
            const productResponse = await fetch(
              `https://order-api-patiparnpa.vercel.app/products/${item.productID}`
            );
            if (productResponse.ok) {
              const productData = await productResponse.json();
              return {
                ...item,
                productName: productData.name,
                productPrice: productData.price,
              };
            } else {
              console.error(
                "Failed to fetch product details for productId:",
                item.productID
              );
            }
          });

          // Wait for all product detail fetch requests to resolve
          const productsData = await Promise.all(productPromises);

          // Filter out any null values (failed product detail fetch requests)
          const filteredProductsData = productsData.filter(
            (product) => product !== null
          );

          // Update basketData with product details
          setBasketData({
            ...data,
            items: { [storeId || ""]: filteredProductsData },
          });
        } else {
          console.error("Failed to fetch basket data");
        }
      } catch (error) {
        console.error("Error fetching basket data:", error);
      }
    };

    fetchBasketData();
  }, []); // Remove storeId from the dependency array

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
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}>{storeName}</h5>
        <div className="right-elements">
          <div className="elements-container">
            {/* Add other elements as needed */}
          </div>
        </div>
      </div>
      {basketData &&
        basketData.items &&
        storeId &&
        basketData.items[storeId] && (
          <>
            <div className="custom-heading">Order Summary</div>
            {basketData.items[storeId].map((item: any, index: number) => (
              <div className="my-order-detail-box" key={index}>
                <div
                  className="left-content"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginRight: "-55%",
                  }}
                >
                  {item.quantity}x
                </div>
                <div className="center-content">
                  <div className="my-order-shop">{item.productName}</div>
                  <div className="my-order-date">Delete</div>
                </div>
                <div
                  className="right-content"
                  style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                >
                  <div
                    className="my-order-price"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    {item.productPrice} Bath
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      <div className="custom-heading" style={{ paddingTop: "15px" }}>
        วิธีการชำระเงิน
      </div>
      <PaymentMethodSection />
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          fontSize: "18px",
          fontWeight: "bolder",
          backgroundColor: "#ffffff", // Optional background color
        }}
      >
        <div style={{ color: "#000000" }}>Total</div>
        <div style={{ color: "#000000" }}>150 Bath</div>
      </div>
      <div
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: "0",
          width: "100%",
          marginBottom: "5px",
        }}
      >
        <button
          style={{
            backgroundColor: "#2357A5",
            border: "none",
            width: "95%",
            color: "#FFFFFF",
            height: "56px",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          Place Order
        </button>
      </div>
    </>
  );
};
