import {call, put, takeLatest} from "redux-saga/effects"
import commentService from "../../services/CommentService";
import { getComments,setComments} from "./slice";



function* allComments(action) {
    try {
        const data = yield call(commentService.getAllGalleryComments,action.payload)
        yield put(setComments(data))
        } catch (error) { 
        }
}


export default function* watchForSagas(){
    yield takeLatest(getComments.type, allComments)
}
