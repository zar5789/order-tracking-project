import Logo from "../assets/logo.jpg";

export const UserLogin = () => {
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div style={{textAlign:'center', marginBottom:'50%'}}>
        <h5 style={{fontWeight:'bold'}}>Welcome</h5>
        <p>Please Login with Line before starting</p>
      </div>
      <button className="login-button">Login with Line</button>
    </div>
  );
};
