import "./App.css";
import {HomePage} from "./components/HomePage";
import OrderPage from "./components/OrderPage";
import { Routes, Route } from 'react-router-dom';
import { RecentOrder } from "./components/RecentOrder";
import { SelectMenu } from "./components/SelectMenu";
import { SelectMenuFeature } from "./components/SelectMenuFeature";
import { SelectMenuFeature2 } from "./components/SelectMenuFeature2";
import UserProfilePage from "./components/UserProfile";
import { UserLogin } from "./components/UserLogin";
import { MenuPage } from "./components/MenuPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/order" element={<OrderPage />} />
        <Route path='/menu' element={<SelectMenu />}/>
        <Route path='/menufea1' element={<SelectMenuFeature />}/>
        <Route path="/menufea2" element={<SelectMenuFeature2 />} />
        <Route path='/userlogin' element={<UserLogin></UserLogin>}></Route>
        <Route path='/menupage' element={<MenuPage></MenuPage>}></Route>
      </Routes>

    </div>
      
  );
}

export default App;
