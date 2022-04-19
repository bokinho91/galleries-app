import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    registerUser: () => {},
    loginUser: () => {},
    logoutUser: () => {},
};


export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userToken: "",
  },
  reducers: {
    setUserToken: (state, action) => {
        state.userToken = action.payload;
      },
    removeUserToken: (state) => {
        state.userToken = ""
    },
    ...middlewareActions,
  },
});

export const { 
                setUserToken, 
                removeUserToken,
                registerUser,
                loginUser,
                logoutUser} = usersSlice.actions;

export default usersSlice.reducer; 
