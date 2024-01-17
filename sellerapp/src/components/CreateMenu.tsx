import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar } from "./AppBar";

export const CreateMenu = () => {
  const navigate = useNavigate();

  const [menuImage, setMenuImage] = useState<string>(""); // Specify the type of menuImage
  const [menuName, setMenuName] = useState<string>(""); // Specify the type of menuName
  const [menuPrice, setMenuPrice] = useState<string>(""); // Specify the type of menuPrice
  const [menuStatus, setMenuStatus] = useState<string>("Open"); // Specify the type of menuStatus

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        // Set the image preview and data
        const imageUrl = reader.result as string;
        setMenuImage(imageUrl);
        
        // Log the URL to the console
        console.log("Image URL:", imageUrl);
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  const handleImageContainerClick = () => {
    // Trigger click on the hidden file input
    const fileInput = document.getElementById(
      "imageUpload"
    ) as HTMLInputElement | null;

    if (fileInput) {
      fileInput.click();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Construct the new menu item object
    const newMenuItem = {
      name: menuName,
      price: parseFloat(menuPrice),
      status: menuStatus,
      img_url: menuImage, // Include the image data in the request
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
        // Clear form fields
        setMenuName("");
        setMenuPrice("");
        setMenuStatus("Open"); // Reset status to "Open"
        setMenuImage(""); // Clear the image state
        navigate("/menulist");
      })
      .catch((error) => {
        console.error("Error creating menu item:", error);
      });
  };

  return (
    <>
      <AppBar />
      <div className="store-setting-container">
        <h5>เพิ่มเมนูอาหาร</h5>
        <br />
        <form onSubmit={handleSubmit} className="store-setting-form">
          <div className="form-group">
            <label>รูปภาพอาหาร</label>
            <div
              className="image-container"
              style={{ cursor: "pointer" }}
              onClick={handleImageContainerClick}
            >
              {menuImage ? (
                <img
                  src={menuImage}
                  alt="Store Image"
                  className="store-image"
                />
              ) : (
                <p></p>
              )}
            </div>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <div className="form-group">
            <label>ชื่ออาหาร</label>
            <input
              type="text"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>ราคา</label>
            <input
              type="number"
              value={menuPrice}
              onChange={(e) => setMenuPrice(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>สถานะ</label>
            <select
              value={menuStatus}
              onChange={(e) => setMenuStatus(e.target.value)}
              className="form-control"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <br />
          <br />
          <button type="submit" className="submit-button">
            สร้าง
          </button>
        </form>
      </div>
    </>
  );
};
