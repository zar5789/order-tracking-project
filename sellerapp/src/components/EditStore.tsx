import React, { useState, useEffect } from "react";
import { AppBar } from "./AppBar";
import { useParams, useNavigate } from "react-router-dom";

export const EditStore = () => {
  const navigate = useNavigate();

  const [storeId, setStoreId] = useState("");
  const [storeImage, setStoreImage] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeStatus, setStoreStatus] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch store data from the API when the component mounts
    fetch(
      "https://order-api-patiparnpa.vercel.app/stores/6502b1429cf6a84012480e55"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setStoreId(data._id);
        setStoreName(data.name);
        setStoreStatus(data.status);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching store data:", error);
      });
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const updateStore = {
      name: storeName,
      status: storeStatus,
    };

    // Send a PUT request to update the store data
    fetch(
      "https://order-api-patiparnpa.vercel.app/stores/6502b1429cf6a84012480e55",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStore),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update store data");
        }
        // Handle success here, such as showing a success message
        console.log("Store data updated successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating store data:", error);
      });
  };

  return (
    <>
      <AppBar></AppBar>
      <br></br>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="store-setting-container">
  <h5 style={{ color: "#002336" }}>ตั้งค่าร้านค้า</h5>
  <br />
  <form className="store-setting-form" onSubmit={handleFormSubmit}>
    <div className="form-group">
      <label>รูปร้านค้า</label>
      <div className="image-container">
        {storeImage ? (
          <img
            src={storeImage}
            alt="Store Image"
            className="store-image"
          />
        ) : null}
      </div>
    </div>

    <div className="form-group">
      <label>ชื่อร้านค้า</label>
      <input
        type="text"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        placeholder="ใส่ชื่อร้าน"
        required
      />
    </div>
    <br />
    <h5 style={{ color: "#002336" }}>ตั้งค่าการรับเงิน</h5>
    <br />
    <div className="form-group">
      <label>ชื่อธนาคาร</label>
      <input
        type="text"
        value={bankName}
        onChange={(e) => setBankName(e.target.value)}
        placeholder="ใส่ชื่อธนาคาร"
        required
      />
    </div>

    <div className="form-group">
      <label>ชื่อในบัญชี</label>
      <input
        type="text"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
        placeholder="ใส่ชื่อในบัญชี"
        required
      />
    </div>

    <div className="form-group">
      <label>หมายเลขบัญชี</label>
      <input
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="ใส่หมายเลขบัญชี"
        required
      />
    </div>

    <button type="submit">บันทึก</button>
  </form>
</div>

      )}
    </>
  );
};
