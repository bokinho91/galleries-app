export const selectGalleries = state => state.galleries.galleriesList
export const selectMyGalleries = state => state.galleries.myGalleries
export const selectGalleriesListLength = state => state.galleries.galleriesList.length
export const selectPageNumber= state => state.galleries.pageNum
export const selectMyGalleryPageNumber= state => state.galleries.myGallPageNum
export const selectSingleGallery= state => state.galleries.singleGallery
export const selectAuthorsGalleries = state => state.galleries.authorsGalleries
export const selectAuthorsGalleryPageNumber = state => state.galleries.authorsGallPageNum
export const selectAuthorId = state => state.galleries.authorId