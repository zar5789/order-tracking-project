// AnyComponent.tsx
import { usePopup } from "./PopupContext";
import PopupComponent from "./PopupComponent";
import { useState } from "react";
import React, { useEffect } from "react";

const AnyComponent: React.FC = () => {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const basketId = "65c1de9bf9f7e4446d91dc8e";
  const orderId = "65cb0c1e12d8ac28fc2eb453";
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    console.log("check", file);
  }, [file]);

  const handleDeleteBasket = async () => {
    try {
      const response = await fetch(
        `https://order-api-patiparnpa.vercel.app/orders/${orderId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log(`Basket with ID ${orderId} deleted successfully`);
        // You can perform additional actions after successful deletion
      } else {
        console.error(`Error deleting basket: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error deleting basket:", error);
    }
  };

  const handleUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
          `https://order-api-patiparnpa.vercel.app/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          setUrl(responseData.Location);
          console.log("File uploaded successfully. Response:", responseData);
        } else {
          console.error("Error uploading file:", response.statusText);
        }
      } else {
        console.error("No file selected for upload.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const customContent = (
    <div>
      <p>This is a custom content for this specific popup.</p>
      <p>Feel free to adjust it based on your needs.</p>
    </div>
  );

  return (
    <div>
      <button onClick={() => openPopup()}>Open Popup</button>
      {isPopupOpen && <PopupComponent onClose={closePopup} />}
      <button onClick={handleDeleteBasket}>Delete Order</button>
      <button onClick={handleUpload}>Upload</button>
      <input type="file" onChange={handleFileChange} />
      <p>Uploaded URL: {url}</p>
    </div>
  );
};

export default AnyComponent;
