import { Link } from "react-router-dom";
import { AppBar } from "./AppBar";

export const ReportPage = () => {
  return (
    <>
      <AppBar></AppBar>
      <div className="report-options">
        <h5 style={{color:'#2357A5'}}>รายวัน</h5>
        <h5>รายสัปดาห์</h5>
        <h5>รายเดือน</h5>
        <h5>รายปี</h5>
      </div>
      <div className="report-content-row">
        <div className="report-content">
          <h4>เมนูทั้งหมด</h4>
          <h1>500</h1>
        </div>
        <div className="report-content">
          <h4>จำนวนออเดอร์</h4>
          <h1>5000</h1>
        </div>
        <div className="report-content">
          <h4>ยอดเงินที่ได้รับ</h4>
          <h1>1000</h1>
        </div>
      </div>
    </>
  );
};
