import MyAppBar from "./AppBar";
import { RecentOrder } from "./RecentOrder";

const OrderPage: React.FC = () => {
    return (
      <div>
        <h1>Order Page</h1>
        <MyAppBar></MyAppBar>
        <RecentOrder></RecentOrder>
      </div>
    );
  };
  
  export default OrderPage;