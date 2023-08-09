import MyAppBar from "./AppBar";
import FavoriteMenu from "./FavoriteMenu";
import RestaurantCard from "./StoreSelection";

const HomePage: React.FC = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <MyAppBar></MyAppBar>
        <RestaurantCard></RestaurantCard>
        <FavoriteMenu></FavoriteMenu>

      </div>
    );
  };
  
  export default HomePage;