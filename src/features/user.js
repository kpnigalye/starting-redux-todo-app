import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../constants";

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialUserState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialUserState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
