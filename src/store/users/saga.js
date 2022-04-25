import {call, put, takeLatest} from "redux-saga/effects"
import userService from "../../services/UserService";
import { resetGalleriesData } from "../galleries/slice";
import { getActiveUser, 
        loginUser, 
        logoutUser, 
        registerUser, 
        removeUserToken, 
        setActiveUser, 
        setUserToken,
        removeActiveUser,
        setErrorsToErrorsList,
     } from "./slice";


function* registerNewUser(action) {
    try {
        const data = yield call(userService.registerUser, action.payload.credentials)
        yield put(setUserToken(data.token))
            if (action.payload.meta.onSuccess) {
                yield call(action.payload.meta.onSuccess)
            }
        
        } catch (error) {
            const err = error.response.data
            yield put(setErrorsToErrorsList(err))
        }
}


function* login(action) {
    try {
        yield call(userService.loginUser, action.payload.credentials)
        yield put(setUserToken())
    
            if (action.payload.meta.onSuccess) {
                yield call(action.payload.meta.onSuccess)
            }
    } catch (error) {
        const err = error.response.data
        yield put(setErrorsToErrorsList(err))
    }
}



function* logout(action) {
    try {
        yield call(userService.logoutUser)
        yield put(removeUserToken())
        yield put(removeActiveUser())
        yield put(resetGalleriesData())
            if (action.payload.meta.onSuccess) {
                yield call(action.payload.meta.onSuccess)
            }
      
    } catch (error) {
        const err = error.response.data
        yield put(setErrorsToErrorsList(err))
    }
}

function* handleGetActiveUser() {
    try {
        const activeUser = yield call(userService.getActiveUser) 
        yield put(setActiveUser(activeUser))
        yield put(setUserToken())
    }catch(error){
        const err = error.response.data
        yield put(setErrorsToErrorsList(err))
    }
}



export default function* watchForSagas(){
    yield takeLatest(registerUser.type, registerNewUser)
    yield takeLatest(loginUser.type, login)
    yield takeLatest(logoutUser.type, logout)
    yield takeLatest(getActiveUser.type, handleGetActiveUser)

}
