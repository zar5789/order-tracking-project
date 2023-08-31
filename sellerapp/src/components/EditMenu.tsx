import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar } from "./AppBar";

export const EditMenu = () => {
  const [menuImage, setMenuImage] = useState<File | null>(null); // State for menu image URL
  const [menuName, setMenuName] = useState(""); // State for menu name
  const [menuPrice, setMenuPrice] = useState(""); // State for menu price
  const [menuStatus, setMenuStatus] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setMenuImage(event.target.files[0]);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenuName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenuPrice(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMenuStatus(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement your logic here to update the menu details
  };

  return (
    <>
      <AppBar></AppBar>
      <div className="store-setting-container">
        <h2>Edit Menu Detail</h2>
        <form onSubmit={handleSubmit} className="store-setting-form">
          <div className="form-group">
            <label>Menu Image</label>
            <input
              type="file"
              onChange={(e) => setMenuImage(e.target.files?.[0] || null)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Menu Name</label>
            <input
              type="text"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Menu Price</label>
            <input
              type="number"
              value={menuPrice}
              onChange={(e) => setMenuPrice(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Menu Status</label>
            <select
              value={menuStatus}
              onChange={(e) => setMenuStatus(e.target.value)}
              className="form-control"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};
