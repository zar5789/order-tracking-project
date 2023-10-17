import { AppBar } from "./AppBar";
import liff from '@line/liff';
import { useEffect, useState } from "react";

type Profile = {
  userId: string;
  displayName: string;
  pictureUrl: string | undefined;
};

export const TestLogin = () => {
  const [userProfile, setUserProfile] = useState<Profile | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  const handleLoginClick = async () => {
    try {
      // Log in using LIFF
      await liff.login();

      // Fetch user profile
      const profile = await liff.getProfile();

      // Handle potential undefined values from LIFF
      if (profile) {
        setUserProfile({
          userId: profile.userId || '',
          displayName: profile.displayName || '',
          pictureUrl: profile.pictureUrl || '', // Provide an initial value
        });
      }

      // Fetch and set the ID token
      const token = await liff.getIDToken();
      setIdToken(token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    // Initialize LIFF
    liff.init({ liffId: 'YOUR_LIFF_ID' })
      .then(() => {
        // LIFF is initialized; you can now use the liff object.
      })
      .catch((error) => {
        console.error('LIFF initialization failed', error);
      });
  }, []);

  return (
    <>
      <AppBar />
      <div className="store-setting-container">
        <h1>Test Line Login</h1>
        {userProfile ? (
          <div className="user-profile">
            {userProfile.pictureUrl && (
              <img src={userProfile.pictureUrl} alt="User Profile" />
            )}
            <p>User ID: {userProfile.userId}</p>
            <p>Display Name: {userProfile.displayName}</p>
            {idToken && <p>ID Token: {idToken}</p>}
          </div>
        ) : (
          <button onClick={handleLoginClick}>Login with LINE</button>
        )}
      </div>
    </>
  );
};