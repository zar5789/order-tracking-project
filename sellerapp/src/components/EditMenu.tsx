import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar } from "./AppBar";
import { useParams, useNavigate } from "react-router-dom";

export const EditMenu = () => {
  const navigate = useNavigate();
  const { _id } = useParams();

  //const [menuImage, setMenuImage] = useState(""); // State for menu image URL
  const [menuName, setMenuName] = useState(""); // State for menu name
  const [menuPrice, setMenuPrice] = useState(""); // State for menu price
  const [menuStatus, setMenuStatus] = useState(""); // State for menu status
  const [menuImage, setMenuImage] = useState("");

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

  // Use useEffect to fetch and set the menu details when the component loads
  useEffect(() => {
    fetch(`https://order-api-patiparnpa.vercel.app/products/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Add this line to log the data
        setMenuName(data.name);
        setMenuPrice(data.price);
        setMenuStatus(data.status);
        setMenuImage(data.product_img_url);
      })
      .catch((error) => {
        console.error("Error fetching menu details:", error);
      });
  }, [_id]);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Construct the updated menu item object
    const updatedMenuItem = {
      //menuImage,
      name: menuName,
      price: parseFloat(menuPrice),
      status: menuStatus,
      product_img_url: menuImage
    };

    // Send a PUT request to update the menu item
    fetch(`https://order-api-patiparnpa.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMenuItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update menu item");
        }
        navigate("/menulist");
      })
      .catch((error) => {
        console.error("Error updating menu item:", error);
        // Handle the error appropriately (e.g., show an error message to the user)
      });
  };

  return (
    <>
      <AppBar></AppBar>
      <div className="store-setting-container">
        <h5 style={{ color: "#002336" }}>ตั้งค่าเมนูอาหาร</h5>
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
              type="string"
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
          <div className="button-group2">
            <button type="submit" className="submit-button">
              บันทึก
            </button>
            <button className="delete-button">ลบ</button>
          </div>
        </form>
      </div>
    </>
  );
};
