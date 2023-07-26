import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/user";

function Authentication() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.value);

  return (
    <div>
      {!userState.isLoggedIn ? (
        <button
          onClick={() =>
            dispatch(
              login({
                name: "Krishna",
                age: 35,
                email: "kpn@gmail.com",
                isLoggedIn: true,
              })
            )
          }
        >
          Login
        </button>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
}

export default Authentication;
