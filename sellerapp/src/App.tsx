import { HomePage } from "./components/HomePage";
import { Message } from "./message";
import "./App.css";
import { EditStore } from "./components/EditStore";
import { ReportPage } from "./components/ReportPage";
import { Menulist } from "./components/Menulist";
import { EditMenu } from "./components/EditMenu";
import { FrontStore } from "./components/FrontStore";
import { BackStore } from "./components/BackStore";
import { IncomingOrder } from "./components/IncomingOrder";
import { CurrentOrder } from "./components/CurrentOrder";

function App() {
  return (
    <div className="container">
      <FrontStore></FrontStore>
    </div>
  );
}

export default App;
