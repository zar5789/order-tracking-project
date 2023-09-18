import React, { useState, useEffect } from "react";
import { AppBar } from "./AppBar";
import { useParams, useNavigate } from "react-router-dom";

export const EditStore = () => {
  const navigate = useNavigate();

  const [storeId, setStoreId] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeStatus, setStoreStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch store data from the API when the component mounts
    fetch("https://order-api-patiparnpa.vercel.app/stores/6502b1429cf6a84012480e55")
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

  const handleFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const updateStore = {
      name: storeName,
      status: storeStatus,
    };

    // Send a PUT request to update the store data
    fetch("https://order-api-patiparnpa.vercel.app/stores/6502b1429cf6a84012480e55", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateStore),
    })
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
      {loading ? (<p>Loading...</p>) : (
      <div className="store-setting-container">
        <h1>Store Settings</h1>
        <form className="store-setting-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Store Id:</label>
            <input
              type="text"
              value={storeId}
              onChange={(e) => setStoreId(e.target.value)}
              placeholder="Store Id"
              disabled
            />
          </div>
          <div className="form-group">
            <label>Store Name:</label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="Enter store name"
              required
            />
          </div>
          <div className="form-group">
            <label>Menu Status</label>
            <select
              value={storeStatus}
              onChange={(e) => setStoreStatus(e.target.value)}
              className="form-control"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <button type="submit">Save Settings</button>
        </form>
      </div>)}
    </>
  );
};