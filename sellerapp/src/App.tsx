import { HomePage } from "./components/HomePage";
import { Message } from "./message";
import "./App.css";
import { EditStore } from "./components/EditStore";
import { ReportPage } from "./components/ReportPage";
import { Menulist } from "./components/Menulist";

function App() {
  return (
    <div className="container">
      <Menulist></Menulist>
    </div>
  );
}

export default App;
