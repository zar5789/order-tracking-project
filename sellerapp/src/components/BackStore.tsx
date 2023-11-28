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
          <h5 style={{ color: "#FFFFFF" }}>
            <Link to='/' style={{textDecoration:"none", color: "#FFFFFF"}}>IT Cafeteria</Link> |{" "}
            <Link
              to="/front"
              style={{ color: "#FFFFFF", textDecoration: "none" }}
            >
              หน้าร้าน
            </Link>{" "}
            |{" "}
            <Link
              to="/back"
              style={{ color: "#FFFFFF", textDecoration: "none" }}
            >
              หลังร้าน
            </Link>
          </h5>
        </div>
      </div>
      <div className="back-store-page">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="food-order-table">
            <thead>
              <tr>
                <th style={{ width: "100px" }}></th>
                <th style={{ textAlign:'left'}}>ชื่อเมนู</th>
                <th>จำนวน</th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: '80vh', overflowY: 'auto' }}>
              {foodOrders.map((order, index) => (
                <tr key={index}>
                  <td style={{ width: "100px"}}>
                    <input
                      type="checkbox"
                      // You can set an id and value for the checkbox if needed
                      id={`checkbox-${index}`}
                      value={order._id} // You might want to use a unique identifier as the value
                      style={{
                        width: "18px", // Adjust the width as needed
                        height: "18px", // Adjust the height as needed
                      }}
                    />
                  </td>
                  <td style={{ textAlign:'left'}}>{order.foodName}<p className="back-food-details">ไข่ดาวไม่สุก</p></td>
                  <td>{order.amount} จาน</td>
                </tr>
              ))}
            </tbody>
            <tr>
              <th></th>
              <th></th>
              <th style={{ textAlign: "right" }}>
                <button className="back-button">
                  &#x21B6; ย้อนกลับ
                </button>
                <button className="finish-button">เสร็จสิ้น</button>
              </th>
            </tr>
          </table>
        )}
      </div>
    </>
  );
};
