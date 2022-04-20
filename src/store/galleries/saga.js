import {call, put, takeLatest} from "redux-saga/effects"
import galleryService from "../../services/GalleryService";
import { addNewGallery, getAllGalleries, getMyGalleries, getSingleGallery, setCurrPage, setGalleriesList, setMyGalleries, setSingleGallery } from "./slice";



function* allGalleries() {
    try {
        const data = yield call(galleryService.getAll)
        yield put(setGalleriesList(data.data))
        yield put(setCurrPage(data.current_page))
        } catch (error) {
            
        }
    }
    
    function* myGalleries(){
        try {
            const data = yield call(galleryService.getMyGalleries)
            yield put(setMyGalleries(data.data))
        } catch (error) {
            
        }
    }

function* addGallery(action) {
    try {
        const data = yield call(galleryService.createGallery, action.payload.newGallery)
        //console.log('created new gallery', { data})
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
    yield takeLatest(getMyGalleries.type, myGalleries)
}
