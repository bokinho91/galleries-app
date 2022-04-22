import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    loadGalleries: () =>{},
    addNewGallery: () => {},
    getSingleGallery: () => {},
    getMyGalleries: () => {},
    getAuthorsGalleries: () => {},
    emptyAuthorsGalleries: () => {},
};


export const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleriesList:[],
    pageNum:0,
    singleGallery:{},
    myGalleries:[],
    myGallPageNum:0,
    authorsGalleries:[],
    authorsGallPageNum:0,
    authorId:0
  },
  reducers: {
    setGalleriesList: (state,action) => {
        state.galleriesList = [...state.galleriesList, ...action.payload]
    },

    pageNumberIncrement: (state)=> {
          state.pageNum += 1
      },
    myGallPageNumIncrement: (state)=> {
          state.myGallPageNum+=1
    },
    authorsGallPageNumIncrement: (state)=> {
      state.authorsGallPageNum+=1
},
    setSingleGallery: (state,action) =>{
      state.singleGallery = action.payload
    },
    setMyGalleries: (state,action) => {
      state.myGalleries= [...state.myGalleries, ...action.payload]
    },
    setAuthorsGalleries: (state,action) => {
      state.authorsGalleries = [...state.authorsGalleries, ...action.payload]
    },
    setAuthorsGalleriesEmpty: (state) =>{
      state.authorsGalleries= []
    },
    resetAuthorsPageNum: (state) =>{
      state.authorsGallPageNum = 0
    },
    setAuthorId: (state,action) => {
      state.authorId = action.payload
    },
    ...middlewareActions,
  },
});

export const { loadGalleries,
                setGalleriesList,
                myGallPageNumIncrement,
                authorsGallPageNumIncrement,
                pageNumberIncrement,
                addNewGallery,
                getSingleGallery,
                setSingleGallery,
                getMyGalleries,
                setMyGalleries,
                getAuthorsGalleries,
                setAuthorsGalleries,
                setAuthorId,
                setAuthorsGalleriesEmpty,
                emptyAuthorsGalleries,
                resetAuthorsPageNum,
              } = galleriesSlice.actions;

export default galleriesSlice.reducer; 
