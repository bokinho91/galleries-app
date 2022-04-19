import userSaga from "./users/saga"
import * as gallerySaga from "./galleries/saga"


const sagas = {
    userSaga,
    ...gallerySaga,
};


export default sagas;
