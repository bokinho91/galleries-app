import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getAllGalleries: () =>{},
    addNewGallery: () => {},
    getSingleGallery: () => {}
};


export const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleriesList:[],
    pageNum:1,
    singleGallery:{}
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
    setSingleGallery: (state,action) =>{
      state.singleGallery = action.payload
    },
    ...middlewareActions,
  },
});

export const { getAllGalleries,
                setGalleriesList,
                pageNumberDecrement,
                pageNumberIncrement,
                addNewGallery,
                getSingleGallery,
                setSingleGallery} = galleriesSlice.actions;

export default galleriesSlice.reducer; 
