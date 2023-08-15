import MyAppBar from "./AppBar";
import MenuPage from "./MenuPage";
import RestaurantCard from "./StoreSelection";
import liff from "@line/liff";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [pictureUrl, setPictureUrl] = useState("");
  const [IdToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");
  const logout = () => {
    liff.logout();
    window.location.reload();
  };

  const initLine = () => {
    liff.init(
      { liffId: "2000210581-wLmA5Enp" },
      () => {
        if (liff.isLoggedIn()) {
          runApp();
        } else {
          liff.login();
        }
      },
      (err) => console.error(err)
    );
  };

  const runApp = () => {
    const idToken = liff.getIDToken();
    setIdToken(idToken);
    liff
      .getProfile()
      .then((profile) => {
        console.log(profile);
        setDisplayName(profile.displayName);
        setPictureUrl(profile.pictureUrl);
        setStatusMessage(profile.statusMessage);
        setUserId(profile.userId);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    initLine();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <MyAppBar></MyAppBar>
      <RestaurantCard></RestaurantCard>
      <MenuPage></MenuPage>
      <div style={{ textAlign: "center" }}>
        <h1>Test line login</h1>
        <hr></hr>
        <img src={pictureUrl} width="300px" height="300px"></img>
        <p>
          <b>id token: </b>
          {IdToken}
        </p>
        <p>
          <b>display name: </b>
          {displayName}
        </p>
        <p>
          <b>status message: </b>
          {statusMessage}
        </p>
        <p>
          <b>user id: </b>
          {userId}
        </p>
        <button onClick={() => logout()}>Log out</button>
      </div>
    </div>
  );
};

export default HomePage;
