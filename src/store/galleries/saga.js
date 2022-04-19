import {call, put, takeLatest} from "redux-saga/effects"
import galleryService from "../../services/GalleryService";
import { addNewGallery, getAllGalleries, setGalleriesList } from "./slice";



function* allGalleries() {
    try {
        const data = yield call(galleryService.getAll)
        console.log(data);
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






export function* watchForSagas(){
    yield takeLatest(getAllGalleries.type, allGalleries)
    yield takeLatest(addNewGallery.type, addGallery)

}
