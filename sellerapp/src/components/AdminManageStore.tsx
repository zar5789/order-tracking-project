import { AppBar } from "./AppBar";
import Sidebar from "./SideBar";

export const AdminManageStore = () => {
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, paddingLeft: "200px", paddingRight: "20px" }}>
          <AppBar />
        </div>
      </div>
    </>
  );
};
