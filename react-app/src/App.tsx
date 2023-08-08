import LoginPage from "./components/LoginPage";
import ListGroup from "./components/LoginPage";
import Test from "./test";
import "./App.css";
import MyAppBar from "./components/AppBar";
import RestaurantCard from './components/StoreSelection';
import FavoriteMenu from "./components/FavoriteMenu";
import TabBar from "./components/Tabbar";
import HomePage from "./components/HomePage";
import OrderPage from "./components/OrderPage";
import { Routes, Route } from 'react-router-dom';
import RecentOrder, {  } from "./components/RecentOrder";
import { SelectMenu } from "./components/SelectMenu";
import { SelectMenuFeature } from "./components/SelectMenuFeature";
import { SelectMenuFeature2 } from "./components/SelectMenuFeature2";

function App() {
  return (
    <div className="container">
      <SelectMenuFeature2 />
    </div>
      
  );
}

export default App;
