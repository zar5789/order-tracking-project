import { HomePage } from "./components/HomePage";
import "./App.css";
import { EditStore } from "./components/EditStore";
import { ReportPage } from "./components/ReportPage";
import { Menulist } from "./components/Menulist";
import { EditMenu } from "./components/EditMenu";
import { FrontStore } from "./components/FrontStore";
import { BackStore } from "./components/BackStore";
import { Routes, Route } from 'react-router-dom';
import { CreateMenu } from "./components/CreateMenu";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path="/editstore" element={<EditStore></EditStore>}></Route>
        <Route path="/report" element={<ReportPage></ReportPage>}></Route>
        <Route path="/menulist" element={<Menulist></Menulist>}></Route>
        <Route path="/editmenu/:_id" element={<EditMenu />} />
        <Route path="/front" element={<FrontStore></FrontStore>}></Route>
        <Route path="/back" element={<BackStore></BackStore>}></Route>
        <Route path="/createmenu" element={<CreateMenu></CreateMenu>}></Route>
      </Routes>
    </div>
  );
}

export default App;
