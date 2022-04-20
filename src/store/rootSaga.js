import userSaga from "./users/saga"
import commentSaga from "./comments/saga"
import * as gallerySaga from "./galleries/saga"


const sagas = {
    userSaga,
    commentSaga,
    ...gallerySaga,
};


export default sagas;
