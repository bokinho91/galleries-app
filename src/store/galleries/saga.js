import {call, put, takeLatest} from "redux-saga/effects"
import galleryService from "../../services/GalleryService";
import { addNewGallery, getAllGalleries, getSingleGallery, setGalleriesList, setSingleGallery } from "./slice";



function* allGalleries() {
    try {
        const data = yield call(galleryService.getAll)
        
        yield put(setGalleriesList(data))
        } catch (error) {
            
        }
}


function* addGallery(action) {
    try {
        //const data = yield call(galleryService.createGallery, action.payload)
        yield put()
        } catch (error) {
            
        }
}


function* singleGallery(action) {
    try {
        const data = yield call(galleryService.getOneGallery, action.payload)
        yield put(setSingleGallery(data))
        } catch (error) {
            
        }
}






export function* watchForSagas(){
    yield takeLatest(getAllGalleries.type, allGalleries)
    yield takeLatest(addNewGallery.type, addGallery)
    yield takeLatest(getSingleGallery.type, singleGallery)
}
