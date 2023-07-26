import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const userState = useSelector((state) => state.user.value);

  return (
    <div>
      {userState.isLoggedIn ? (
        <>
          <h3>Profile</h3>
          <p>Name: {userState.name}</p>
          <p>Email: {userState.email}</p>
          <p>Age: {userState.age}</p>
        </>
      ) : (
        <>Login to continue</>
      )}
    </div>
  );
}

export default Profile;
