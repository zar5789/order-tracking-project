import React from "react";
import MyAppBar from "./AppBar";
import { SelectMenu } from "./SelectMenu";
import MenuPage from "./MenuPage";

interface UserProfile {
  name: string;
  image: string;
}

const UserProfilePage: React.FC = () => {
  // Example user profile data
  const userProfile: UserProfile = {
    name: "John Doe",
    image: "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  };

  return (
    <>
      <MyAppBar />
      <div className="user-profile">
        <div className="user-info">
          <img src={userProfile.image} className="user-image" alt="User" />
          <div className="user-details">
            <div className="user-name">{userProfile.name}</div>
          </div>
        </div>
        <MenuPage />
      </div>
      <button className="orange">Log out</button>
    </>
  );
};

export default UserProfilePage;