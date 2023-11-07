// Login.tsx
import { useState } from 'react';
import liff from '@line/liff';

interface UserProfile {
  userId: string;
  displayName: string;
  pictureUrl: string;
  // Add any other properties you expect
}

function Login() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleLoginClick = async () => {
    try {
      await liff.login();
      const liffProfile = await liff.getProfile();

      // Map the liffProfile to your UserProfile interface
      const userProfile: UserProfile = {
        userId: liffProfile.userId,
        displayName: liffProfile.displayName,
        pictureUrl: liffProfile.pictureUrl || '', // Handle undefined case
        // Add any other properties you expect
      };

      setUserProfile(userProfile);

      const userId = userProfile.userId;

      try {
        const response = await fetch('/api/checkUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        if (response.ok) {
          const data = await response.json();
          const accessToken = data.accessToken;
          localStorage.setItem('accessToken', accessToken);
        } else {
          console.error('User not found.');
        }
      } catch (error) {
        console.error('Error checking user:', error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  return (
    <div>
      <button onClick={handleLoginClick}>Login with LINE</button>
    </div>
  );
}

export default Login;