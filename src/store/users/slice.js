import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  saveToken: () => {},
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

    ...middlewareActions,
  },
});

export const { saveToken} = usersSlice.actions;

export default usersSlice.reducer; 
