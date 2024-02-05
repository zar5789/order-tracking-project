// AnyComponent.tsx
import { usePopup } from "./PopupContext";
import PopupComponent from "./PopupComponent";

const AnyComponent: React.FC = () => {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const basketId = "65c0526ab92dafdb7f5c560d";

  const handleDeleteBasket = async () => {
    try {
      const response = await fetch(
        `https://order-api-patiparnpa.vercel.app/baskets/${basketId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log(`Basket with ID ${basketId} deleted successfully`);
        // You can perform additional actions after successful deletion
      } else {
        console.error(`Error deleting basket: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error deleting basket:", error);
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
      <button onClick={handleDeleteBasket}>Delete Basket</button>
    </div>
  );
};

export default AnyComponent;
