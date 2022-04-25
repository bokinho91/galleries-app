import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    loadGalleries: () =>{},
    addNewGallery: () => {},
    getSingleGallery: () => {},
    getMyGalleries: () => {},
    getAuthorsGalleries: () => {},
    emptyAuthorsGalleries: () => {},
    setSearchedText: () => {},
    editGallery: () => {},
    deleteGallery: () => {},
    resetAuthorsGalleriesData: () => {},
    resetSearchedText: () => {},
};


export const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleriesList:[],
    galleriesListCheck: false,
    pageNum:0,
    singleGallery:{},
    myGalleries:[],
    myGalleriesListCheck: false,
    myGallPageNum:0,
    authorsGalleries:[],
    authorsGalleriesListCheck: false,
    authorsGallPageNum:0,
    authorId:0,
    searchedText:""
  },
  reducers: {
    setGalleriesList: (state,action) => {
        state.galleriesList = [...state.galleriesList, ...action.payload]
    },
    setValueToGalleryListCheck: (state, action)=>{
      state.galleriesListCheck = action.payload
    },
    pageNumberIncrement: (state)=> {
          state.pageNum += 1
    },
    removeFromGalleriesList: (state, action) =>{
      state.myGalleries = state.myGalleries.filter(item=>item.id!==action.payload)
    },
    myGallPageNumIncrement: (state)=> {
          state.myGallPageNum+=1
    },
    authorsGallPageNumIncrement: (state)=> {
      state.authorsGallPageNum+=1
},
    setSingleGallery: (state,action) =>{
      // const urlArray = action.payload.images
      // console.log([...action.payload.images][0].image_url);

      state.singleGallery = action.payload
    },
    setMyGalleries: (state,action) => {
      state.myGalleries= [...state.myGalleries, ...action.payload]
    },
    addNewGalleryToLists: (state, action) => {
      state.myGalleries = [...state.myGalleries, action.payload]
      state.galleriesList = [...state.galleriesList, action.payload]
    },
    setValueToMyGalleriesListCheck: (state, action)=>{
      state.myGalleriesListCheck= action.payload
    },
    setAuthorsGalleries: (state,action) => {
      state.authorsGalleries = action.payload
    },
    setValueToAuthorsGalleriesListCheck: (state, action) =>{
      state.authorsGalleriesListCheck = action.payload
    },
    setAuthorsGalleriesEmpty: (state) =>{
      state.authorsGalleries= []
    },
    resetGalleriesData: (state) =>{
      state.myGalleries= []
      state.myGallPageNum=0
      state.myGalleriesListCheck=false
      state.authorsGalleries=[]
      state.authorsGallPageNum=0
      state.authorsGalleriesListCheck=false
    },
    resetAuthorsPageNum: (state) =>{
      state.authorsGallPageNum = 0
    },
    setAuthorId: (state,action) => {
      state.authorId = action.payload
    },
    setSearchedValue: (state, action) => {
      state.searchedText = action.payload
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
                setSearchedText,
                setSearchedValue,
                resetGalleriesData,
                editGallery,
                setValueToGalleryListCheck,
                setValueToMyGalleriesListCheck,
                deleteGallery,
                removeFromGalleriesList,
                setValueToAuthorsGalleriesListCheck,
                resetAuthorsGalleriesData,
                addNewGalleryToLists,
                resetSearchedText,
              } = galleriesSlice.actions;

export default galleriesSlice.reducer; 
