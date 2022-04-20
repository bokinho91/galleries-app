import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import commentsReducer from "./comments/slice";
import galleriesReducer from "./galleries/slice";
import createSagaMiddleware from 'redux-saga';
import sagas from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    users: usersReducer,
    galleries: galleriesReducer,
    comments: commentsReducer
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
