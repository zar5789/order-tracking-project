import logo from "../assets/logo.jpg";

function LoginPage() {
  return (
    <>
      <h1 className="text-center"></h1>
      <div className="text-center">
        <img
          src={logo}
          className="rounded"
          alt="IT_Cafeteria"
          style={{ width: "300px", height: "270px", marginLeft: "-2%" }}
        ></img>
        <figcaption style={{ margin: "-30px" }}>
          <b>IT Cafeteria</b>
        </figcaption>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button type="button" className="btn btn-success">
          Login with Line
        </button>
      </div>
    </>
  );
}

export default LoginPage;
