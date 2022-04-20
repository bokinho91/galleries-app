import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getComments: () =>{},
    addComment: () => {},
};


export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments:[],
    newComment:""
  },
  reducers: {
   setComments:(state,action)=>{
        state.comments=action.payload
   },
   setNewComment: (state,action)=>{
     state.comments.push(action.payload)
   },
    ...middlewareActions,
  },
});

export const { getComments,
                setComments,
              setNewComment,
            addComment,} = commentsSlice.actions;

export default commentsSlice.reducer; 
