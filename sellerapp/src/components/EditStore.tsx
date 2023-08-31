import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AppBar } from "./AppBar";

export const EditStore = () => {
  const [storeName, setStoreName] = useState("");
  const [storeImage, setStoreImage] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [promptPayNumber, setPromptPayNumber] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <AppBar></AppBar>
      <br></br>
      <div className="store-setting-container">
      <h1>Store Settings</h1>
      <form className="store-setting-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Store Image:</label>
          <input type="file" accept="image/*" />
        </div>
        <div className="form-group">
          <label>Store Name:</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Enter store name"
          />
        </div>
        <h2>Payment Settings</h2>
        <div className="form-group">
          <label>Bank Name:</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="Enter bank name"
          />
        </div>
        <div className="form-group">
          <label>Account Name:</label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter account name"
          />
        </div>
        <div className="form-group">
          <label>PromptPay Number:</label>
          <input
            type="text"
            value={promptPayNumber}
            onChange={(e) => setPromptPayNumber(e.target.value)}
            placeholder="Enter PromptPay number"
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
    </>
  );
};
