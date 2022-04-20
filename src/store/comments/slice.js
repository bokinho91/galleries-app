import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getComments: () =>{},
};


export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments:[]
  },
  reducers: {
   setComments:(state,action)=>{
        state.comments=action.payload
   },
    ...middlewareActions,
  },
});

export const { getComments,
                setComments} = commentsSlice.actions;

export default commentsSlice.reducer; 
