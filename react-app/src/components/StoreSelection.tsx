/**interface RestaurantCardProps {
  name: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}**/

const RestaurantCard: React.FC = () => {
  return (
    <>
    <h1>Select Store</h1>
    <br></br>
    <div className="restaurant-card-container">
      <div className="restaurant-card-wrapper">
        <div className="restaurant-card">
          <img
            className="restaurant-image"
            src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/05/ubon-ratchathani-restaurants002.jpg"
            alt="Restaurant 1"
          />
          <div className="restaurant-details">
            <b>ร้านพี่ช้าง</b>
          </div>
        </div>
        <div className="restaurant-card">
          <img
            className="restaurant-image"
            src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/05/ubon-ratchathani-restaurants002.jpg"
            alt="Restaurant 2"
          />
          <div className="restaurant-details">
            <b>ร้านพี่หมาย</b>
          </div>
        </div>
        <div className="restaurant-card">
          <img
            className="restaurant-image"
            src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/05/ubon-ratchathani-restaurants002.jpg"
            alt="Restaurant 2"
          />
          <div className="restaurant-details">
            <b>ร้านพี่หมาย</b>
          </div>
        </div>
        <div className="restaurant-card">
          <img
            className="restaurant-image"
            src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/05/ubon-ratchathani-restaurants002.jpg"
            alt="Restaurant 2"
          />
          <div className="restaurant-details">
            <b>ร้านพี่หมาย</b>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default RestaurantCard;

