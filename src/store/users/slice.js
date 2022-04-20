import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    registerUser: () => {},
    loginUser: () => {},
    logoutUser: () => {},
    getActiveUser: () => {}
};


export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userToken: "",
    activeUser: {}
  },
  reducers: {
    setUserToken: (state) => {
        state.userToken = localStorage.getItem('token');
      },
    removeUserToken: (state) => {
        state.userToken = ""
    },
    setActiveUser: (state, action)=> {
      state.activeUser = action.payload
    },
    ...middlewareActions,
  },
});

export const { 
                setUserToken, 
                removeUserToken,
                registerUser,
                loginUser,
                logoutUser,
                getActiveUser,
                setActiveUser} = usersSlice.actions;

export default usersSlice.reducer; 
