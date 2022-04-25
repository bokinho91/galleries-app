import {call, put, takeLatest} from "redux-saga/effects"
import commentService from "../../services/CommentService";
import { getComments,setComments, setNewComment, addComment, deleteComment, removeComment} from "./slice";



function* allComments(action) {
    try {
        const data = yield call(commentService.getAllGalleryComments,action.payload)
        yield put(setComments(data))
        } catch (error) { 
        }
}

function* newComment(action) {
    try {
        const data = yield call(commentService.addNewComment ,action.payload)
        yield put(setNewComment(data))
        } catch (error) { 
        }
}

function* delComment(action){
    try {
       const data = yield call(commentService.deleteComment,action.payload)
       yield put(removeComment(data.id))
    } catch (error) {
        
    }
}


export default function* watchForSagas(){
    yield takeLatest(getComments.type, allComments)
    yield takeLatest(addComment.type, newComment)
    yield takeLatest(deleteComment.type, delComment)
}
