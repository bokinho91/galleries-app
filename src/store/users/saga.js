import {call, put, takeLatest} from "redux-saga/effects"
import userService from "../../services/UserService";
import { loginUser, registerUser, setUserToken } from "./slice";



function* registerNewUser(action) {
    try {
        const data = yield call(userService.registerUser, action.payload.credentials)
        yield put(setUserToken(data.token))

            if (action.payload.meta.onSuccess) {
                yield call(action.payload.meta.onSuccess)
            }
        
        } catch (error) {
            
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





export function* watchForSagas(){
    yield takeLatest(registerUser.type, registerNewUser)
    yield takeLatest(loginUser.type, login)

}
