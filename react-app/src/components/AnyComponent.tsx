// AnyComponent.tsx
import { usePopup } from "./PopupContext";
import PopupComponent from "./PopupComponent";
import { useState } from "react";
import React, { useEffect } from "react";

const AnyComponent: React.FC = () => {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const productId = "65c0c98c986e8fc8b8cf1426";
  const basketId = "65d4121ae396273d0d187330";
  const orderId = "65d312076aea7dd9f09f9534";

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `https://order-api-patiparnpa.vercel.app/orders/${orderId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Optionally display a success message or perform other actions
        console.log("Product deleted successfully");
      } else {
        // Handle error response
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const customContent: JSX.Element = (
    <div>yee</div>
  );

  return (
    <div>
      <button onClick={() => openPopup(customContent)}>Open Popup</button>
      {isPopupOpen && <PopupComponent onClose={closePopup} />}
      <button onClick={deleteProduct}>Delete product</button>
    </div>
  );
};

export default AnyComponent;
