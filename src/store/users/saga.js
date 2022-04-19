import {call, put, takeLatest} from "redux-saga/effects"
import userService from "../../services/UserService";
import { loginUser, logoutUser, registerUser, removeUserToken, setUserToken } from "./slice";



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
        const data = yield call(userService.loginUser, action.payload.credentials)
        yield put(setUserToken(data.token))

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





export default function* watchForSagas(){
    yield takeLatest(registerUser.type, registerNewUser)
    yield takeLatest(loginUser.type, login)
    yield takeLatest(logoutUser.type, logout)

}
