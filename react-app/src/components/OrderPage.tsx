import MyAppBar from "./AppBar";
import { RecentOrder } from "./RecentOrder";
import TabBar from "./Tabbar";

const OrderPage: React.FC = () => {
    return (
      <div>
        <MyAppBar></MyAppBar>
        <RecentOrder></RecentOrder>
        <br></br>
        <TabBar></TabBar>
      </div>
    );
  };
  
  export default OrderPage;