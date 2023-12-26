import Logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
export const UserLogin = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <br></br>
      <div style={{textAlign:'center', marginBottom:'40%'}}>
        <h5 style={{fontWeight:'bold'}}>Welcome</h5>
        <p>Please Login with Line before start</p>
      </div>
      <button onClick={handleClick} className="login-button">Login with LINE</button>
    </div>
  );
};
