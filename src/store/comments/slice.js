import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getComments: () =>{},
    addComment: () => {},
    deleteComment: () => {},
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
   removeComment:(state,action) =>{
    state.comments = state.comments.filter(item=>item.id!==action.payload)
   },
    ...middlewareActions,
  },
});

export const { 
  getComments,
  setComments,
  setNewComment,
  addComment,
  deleteComment,
  removeComment,
} = commentsSlice.actions;

export default commentsSlice.reducer; 
