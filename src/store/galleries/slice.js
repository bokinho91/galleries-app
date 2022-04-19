import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getAllGalleries: () =>{},
    addNewGallery: () => {},
};


export const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleriesList:[],
    pageNum:1,
  },
  reducers: {
    setGalleriesList: (state,action) => {
        state.galleriesList= action.payload
    },
    pageNumberIncrement: (state)=> {
        if(state.pageNum*10 < state.galleriesList.length){
          state.pageNum += 1
        }
      },
    pageNumberDecrement: (state)=> {
        if(state.pageNum>1){
          state.pageNum-=1
        }
    },
  
    ...middlewareActions,
  },
});

export const { getAllGalleries,
                setGalleriesList,
                pageNumberDecrement,
                pageNumberIncrement,
                addNewGallery} = galleriesSlice.actions;

export default galleriesSlice.reducer; 
