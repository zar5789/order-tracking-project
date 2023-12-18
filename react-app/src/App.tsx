import "./App.css";
import { HomePage } from "./components/HomePage";
import OrderPage from "./components/OrderPage";
import { Routes, Route } from "react-router-dom";
import { RecentOrder } from "./components/RecentOrder";
import { UserProfilePage } from "./components/MyProfile";
import { SelectMenuFeature } from "./components/SelectMenuFeature";
import { SelectMenuFeature2 } from "./components/SelectMenuFeature2";
import { UserLogin } from "./components/UserLogin";
import { MenuPage } from "./components/MenuPage";
import { FavoriteMenus } from "./components/FavoriteMenu";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/profile" element={<UserProfilePage></UserProfilePage>} />
        <Route path="/menufea1" element={<SelectMenuFeature />} />
        <Route path="/menufea2" element={<SelectMenuFeature2 />} />
        <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
        <Route path="/menupage" element={<MenuPage></MenuPage>}></Route>
        <Route
          path="/favmenu"
          element={<FavoriteMenus></FavoriteMenus>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
