import {call, put, takeLatest} from "redux-saga/effects"
import galleryService from "../../services/GalleryService";
import { 
    addNewGallery, 
    loadGalleries, 
    getMyGalleries, 
    getAuthorsGalleries,
    getSingleGallery,
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
    setSearchedText,
    setSearchedValue,
    editGallery,
    setValueToGalleryListCheck,
    pageNumberIncrement,
    setValueToMyGalleriesListCheck,
    deleteGallery,
    removeFromGalleriesList,
    setValueToAuthorsGalleriesListCheck,
    resetAuthorsGalleriesData,
    addNewGalleryToLists,
} from "./slice";

//
function* allGalleries(action) {
    try {
        if(action.payload.meta==="notButton" && action.payload.flag===false){
            const data = yield call(galleryService.getAll, action.payload.data)
            yield put(setGalleriesList(data))
            yield put(pageNumberIncrement())
            yield put(setValueToGalleryListCheck(true))
        }
        if(action.payload.meta==="Button" && action.payload.flag===true){
            const data = yield call(galleryService.getAll, action.payload.data)
            yield put(setGalleriesList(data))
            yield put(pageNumberIncrement())
        }
        
    } catch (error) {
        
    }
}

    
    function* myGalleries(action){
        try {
            if(action.payload.meta==="notButton" && action.payload.flag===false){
                const data = yield call(galleryService.getMyGalleries, action.payload.data)
                yield put(setMyGalleries(data))
                yield put(myGallPageNumIncrement())
                yield put(setValueToMyGalleriesListCheck(true))
            }
            if(action.payload.meta==="Button" && action.payload.flag===true){
                const data = yield call(galleryService.getMyGalleries, action.payload.data)
                yield put(setMyGalleries(data))
                yield put(myGallPageNumIncrement())
            }
        } catch (error) {
   
        }
    }


    function* authorsGalleries(action){
        try {
            if(action.payload.meta==="notButton" && action.payload.flag===false){
                const data = yield call(galleryService.getAuthorsGalleries, action.payload.data)
                yield put(setAuthorId(action.payload.data.id))
                yield put(setAuthorsGalleries(data))
                yield put(authorsGallPageNumIncrement())
                yield put(setValueToAuthorsGalleriesListCheck(true))
            }
            if(action.payload.meta==="Button" && action.payload.flag===true){
                const data = yield call(galleryService.getAuthorsGalleries, action.payload.data)
                yield put(setAuthorsGalleries(data))
                yield put(authorsGallPageNumIncrement())
            }
        } catch (error) {
   
        }
    }

    
    
    
    function* addGallery(action) {
        try {
            const data = yield call(galleryService.createGallery, action.payload.galleryData)
            console.log('nova galerija', data);
            yield put(addNewGalleryToLists(data))
            if (action.payload.meta.onSuccess){
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

function* filterText(action){
    try {
        yield put(setSearchedValue(action.payload))
    } catch (error) {
        
    }
}

function* edit(action){
    try {
        const data = yield call(galleryService.editGallery, action.payload.galleryData)
        if (action.payload.meta.onSuccess) {
            yield call(action.payload.meta.onSuccess)
        }
    } catch (error) {
        
    }
}

function* galleryDelete(action){
    try {
        const data = yield call(galleryService.deleteGallery, action.payload.galleryData)
        yield put(removeFromGalleriesList(data.id))
        if (action.payload.meta.onSuccess){
            yield call(action.payload.meta.onSuccess)
        }
    } catch (error) {
        
    }
}


function* resetAuthor(){
    try {
        yield put(setValueToAuthorsGalleriesListCheck(false))
        yield put( setAuthorsGalleriesEmpty())
        
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
    yield takeLatest(setSearchedText.type, filterText)
    yield takeLatest(editGallery.type, edit)
    yield takeLatest(deleteGallery.type, galleryDelete)
    yield takeLatest(resetAuthorsGalleriesData.type, resetAuthor)
}
