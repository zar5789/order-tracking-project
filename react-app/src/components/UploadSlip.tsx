import { useNavigate } from "react-router-dom";
import Goback from "../assets/goback.png";

export const UploadSlip = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const qrCodeUrl = 'https://i.ytimg.com/vi/fBb5l2jmQhQ/maxresdefault.jpg'; // Replace with the actual URL

  const handleSave = async () => {
    try {
      // Make a request to the server to download the image
      const response = await fetch(`/download?url=${encodeURIComponent(qrCodeUrl)}`);
      const blob = await response.blob();

      // Create a virtual link element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'seller_qr_code.png'; // Set the desired file name

      // Trigger a click on the link to initiate the download
      link.click();
    } catch (error) {
      console.error('Error downloading image:', error);
    }
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
        <img id="qrCodeImage" src={qrCodeUrl} alt="Seller QR Code" style={{ width: "100%", padding:'10px', height:'420px' }} />
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
          className="button-overlay"
          style={{
            background: "#2357A5",
          }}
        >
          Upload Slip
        </button>
      </div>
    </>
  );
};