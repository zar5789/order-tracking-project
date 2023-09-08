import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const CreateMenu = () => {
  const navigate = useNavigate();
  //const [menuImage, setMenuImage] = useState(""); // State for menu image URL
  const [menuName, setMenuName] = useState(""); // State for menu name
  const [menuPrice, setMenuPrice] = useState(""); // State for menu price
  const [menuStatus, setMenuStatus] = useState("Open"); // State for menu status

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Construct the new menu item object
    const newMenuItem = {
      name: menuName,
      price: parseFloat(menuPrice),
      status: menuStatus,
    };

    // Send a POST request to create the new menu item
    fetch("https://order-api-patiparnpa.vercel.app/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create menu item");
        }
        setSuccessMessage("Menu item created successfully.");
        setErrorMessage(""); // Clear any previous error message
        // Clear form fields
        setMenuName("");
        setMenuPrice("");
        setMenuStatus("Open"); // Reset status to "Open"
        navigate("/menulist");
      })
      .catch((error) => {
        console.error("Error creating menu item:", error);
        setErrorMessage("Failed to create menu item. Please try again.");
        setSuccessMessage(""); // Clear any previous success message
      });
  };
  return (
    <>
      <div className="app-bar">
        <h5>IT Cafeteria</h5>
        <div className="right-elements">
          <div className="buttons">
            <Link to="/menulist" className="back-button">
              ย้อนกลับ
            </Link>
          </div>
          <div className="customer-picture"></div>
        </div>
      </div>
      {/* Display success message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {/* Display error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="store-setting-container">
        <h2>Add New Menu</h2>
        <form onSubmit={handleSubmit} className="store-setting-form">
          <div className="form-group">
            <label>Menu Name</label>
            <input
              type="text"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Menu Price</label>
            <input
              type="number"
              value={menuPrice}
              onChange={(e) => setMenuPrice(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Menu Status</label>
            <select
              value={menuStatus}
              onChange={(e) => setMenuStatus(e.target.value)}
              className="form-control"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary submit-button">
            Add new menu
          </button>
        </form>
      </div>
    </>
  );
};
