export const selectGalleries = state => {
   const galleryList= state.galleries.galleriesList
   const pageNum= state.galleries.pageNum
   const pageSize=10

   return galleryList.slice((pageNum-1)*pageSize,pageSize*pageNum)
}

export const selectGalleriesListLength = state => state.galleries.galleriesList.length
export const pageNumber= state => state.galleries.pageNum
export const selectSingleGallery= state => state.galleries.singleGallery