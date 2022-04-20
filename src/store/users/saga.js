import {call, put, takeLatest} from "redux-saga/effects"
import userService from "../../services/UserService";
import { getActiveUser, loginUser, logoutUser, registerUser, removeUserToken, setActiveUser, setUserToken } from "./slice";


function* registerNewUser(action) {
    console.log("Register new user handler")
    try {
        console.log(action.payload.credentials);
        const data = yield call(userService.registerUser, action.payload.credentials)
        yield put(setUserToken(data.token))
            if (action.payload.meta.onSuccess) {
                yield call(action.payload.meta.onSuccess)
            }
        
        } catch (error) {
           
            console.log(error)
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
        console.log(error);
    }
}


function* logout(action) {
    try {
        yield call(userService.logoutUser)
        yield put(removeUserToken())
            if (action.payload.meta.onSuccess) {
                yield call(action.payload.meta.onSuccess)
            }
      
    } catch (error) {
        console.log(error);
    }
}

function* handleGetActiveUser() {
    try {
        const activeUser = yield call(userService.getActiveUser) // GET /api/my-profile
        yield put(setActiveUser(activeUser))
    }catch{

    }
}



export default function* watchForSagas(){
    yield takeLatest(registerUser.type, registerNewUser)
    yield takeLatest(loginUser.type, login)
    yield takeLatest(logoutUser.type, logout)
    yield takeLatest(getActiveUser.type, handleGetActiveUser)

}
