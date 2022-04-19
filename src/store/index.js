import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import galleriesReducer from "./galleries/slice";
import createSagaMiddleware from 'redux-saga';
import sagas from './rootSaga';
const sagaMiddleware = createSagaMiddleware();


export default configureStore({
  reducer: {
    users: usersReducer,
    galleries: galleriesReducer
  },
  middleware : [
    ...getDefaultMiddleware(
     { thunk: false }
    ),
    sagaMiddleware
 ]

});




for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
