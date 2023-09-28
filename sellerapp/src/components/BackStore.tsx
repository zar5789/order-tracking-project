import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Order {
  _id: string;
  productID: string;
  userID: string;
  storeID: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  foodName: string;
}

export const BackStore = () => {
  const [foodOrders, setFoodOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch food orders from the API when the component mounts
    fetch("https://order-api-patiparnpa.vercel.app/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(async (data) => {
        console.log("API Response:", data);

        // Create an array to store the additional food details
        const foodDetailsPromises = data.map(async (order: Order) => {
          // Fetch the product details for each food item
          const productResponse = await fetch(
            `https://order-api-patiparnpa.vercel.app/products/${order.productID}`
          );
          if (!productResponse.ok) {
            throw new Error("Failed to fetch product details");
          }
          const productData = await productResponse.json();

          // Combine the order and product data
          return {
            ...order,
            foodName: productData.name, // Use the product name as the food name
          };
        });

        // Wait for all food details requests to complete
        const foodDetails = await Promise.all(foodDetailsPromises);

        setFoodOrders(foodDetails);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food orders:", error);
        setLoading(false);
      });
  }, []);

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
          </div>
          <div className="customer-picture"></div>
        </div>
      </div>
      <div className="back-store-page">
        <br></br>
        <h2>รายการอาหาร</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="food-order-table">
            <thead>
              <tr>
                <th>รายการอาหาร</th>
                <th>จำนวน</th>
              </tr>
            </thead>
            <tbody>
              {foodOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.foodName}</td>
                  <td>{order.amount} จาน</td>
                </tr>
              ))}
            </tbody>
            <tr>
              <th>
                <button className="finish-button">เสร็จสิ้น</button>
              </th>
              <th></th>
            </tr>
          </table>
        )}
      </div>
    </>
  );
};
