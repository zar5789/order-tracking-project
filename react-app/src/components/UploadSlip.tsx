import { useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";

export const UploadSlip = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const qrCodeUrl = 'https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg'; // Replace with the actual URL

  const handleSave = () => {
    // Handle save logic here
    console.log("Save button clicked");
  };

  const handleUpload = () => {
    navigate('/slip2');
  };
  return (
    <>
      <div
        className="app-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <button
          onClick={handleGoBack}
          style={{
            textDecoration: "none",
            marginLeft: "3%",
            marginRight: "-60%",
            marginBottom: "-1%",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={Goback}
            alt="Go back"
            style={{ marginRight: "8px", width: "28px", height: "28px" }}
          />
        </button>
        <h5 style={{ marginTop: "2%", marginLeft: "3%" }}>อัปโหลดสลีป</h5>
        <div className="right-elements">
          <div className="elements-container">
            {/* Add other elements as needed */}
          </div>
        </div>
      </div>
      <div className='upload-slip-container'>
        <img src={qrCodeUrl} alt="Seller QR Code" style={{ width: "100%", padding:'10px', height:'420px' }} />
        <button
          onClick={handleSave}
          style={{
            background: "#D9D9D9",
            color: "black",
            padding: "10px 40px",
            fontSize: "17px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "10px",
            fontWeight:'bold',
          }}
        >
          บันทึก
        </button>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 5,
          width: "100%",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <button
          onClick={handleUpload}
          style={{
            background: "#2357A5",
            color: "white",
            width: "95%",
            border: "none",
            height: "56px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Upload Slip
        </button>
      </div>
    </>
  );
};