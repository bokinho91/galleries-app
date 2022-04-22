import {call, put, takeLatest} from "redux-saga/effects"
import galleryService from "../../services/GalleryService";
import { 
    addNewGallery, 
    loadGalleries, 
    getMyGalleries, 
    getAuthorsGalleries,
    getSingleGallery,
    pageNumberIncrement,
    myGallPageNumIncrement,
    authorsGallPageNumIncrement, 
    setGalleriesList, 
    setMyGalleries, 
    setSingleGallery,
    setAuthorsGalleries,
    setAuthorId,
    emptyAuthorsGalleries,
    setAuthorsGalleriesEmpty,
    resetAuthorsPageNum,
} from "./slice";

//
function* allGalleries(action) {
    try {
        const data = yield call(galleryService.getAll, action.payload)
        yield put(setGalleriesList(data))
        yield put(pageNumberIncrement())
    } catch (error) {
        
    }
}

    
    function* myGalleries(action){
        try {
            const data = yield call(galleryService.getMyGalleries, action.payload)
            yield put(setMyGalleries(data))
            yield put(myGallPageNumIncrement())
        } catch (error) {
   
        }
    }


    function* authorsGalleries(action){
        try {
            const data = yield call(galleryService.getAuthorsGalleries, action.payload)
            yield put(setAuthorId(action.payload.id))
            yield put(setAuthorsGalleries(data))
            yield put(authorsGallPageNumIncrement())
        } catch (error) {
   
        }
    }

    
    
    
    function* addGallery(action) {
        try {
            const data = yield call(galleryService.createGallery, action.payload.galleryData)
            yield put(setMyGalleries(data))
            if (action.payload.meta.onSuccess) {
               
                yield call(action.payload.meta.onSuccess)
            }
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


function* emptyAuthorsGall(){
    try {
        yield put(setAuthorsGalleriesEmpty())
        yield put(resetAuthorsPageNum())
    } catch (error) {
        
    }
}




export function* watchForSagas(){
    yield takeLatest(loadGalleries.type, allGalleries)
    yield takeLatest(addNewGallery.type, addGallery)
    yield takeLatest(getSingleGallery.type, singleGallery)
    yield takeLatest(getMyGalleries.type, myGalleries)
    yield takeLatest(getAuthorsGalleries.type, authorsGalleries)
    yield takeLatest(emptyAuthorsGalleries.type, emptyAuthorsGall)
}
