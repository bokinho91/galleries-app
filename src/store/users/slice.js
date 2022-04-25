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
    activeUser: {
      firstName:"",
      lastName:"",
      email:""
    },
    errorsList:[]
  },
  reducers: {
    setUserToken: (state) => {
        state.userToken = localStorage.getItem('token');
      },
    removeUserToken: (state) => {
        state.userToken = ""
    },
    setActiveUser: (state, action)=> {
      state.activeUser={
        id: action.payload.id,
        firstName:action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email
      }
    },
    removeActiveUser: (state) =>{
      state.activeUser={
        id:"",
        firstName:"",
        lastName:"",
        email:""
      }
    },
    setErrorsToErrorsList: (state, action) => {
      state.errorsList=[]
      if(action.payload.error){
        state.errorsList= [...state.errorsList, action.payload.error]
      }
      if(action.payload.errors){
        const err = action.payload.errors
        for (const key in err) {
          if (Object.hasOwnProperty.call(err, key)) {
            const element = err[key];
            for (const key in element) {
                state.errorsList=[...state.errorsList, element[key]]
            }
          }
        }
      }
     
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
                setActiveUser,
                removeActiveUser,
                setErrorsToErrorsList,
              } = usersSlice.actions;

export default usersSlice.reducer; 
