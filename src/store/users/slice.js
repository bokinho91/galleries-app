import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    registerUser: () => {},
    loginUser: () => {},
    saveToken: () => {},
};


export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userToken: "",
  },
  reducers: {
    setUserToken: (state, action) => {
        console.log(action.payload);
        state.userToken = action.payload;
      },
    ...middlewareActions,
  },
});

export const { saveToken, 
                setUserToken, 
                registerUser,
                loginUser} = usersSlice.actions;

export default usersSlice.reducer; 
