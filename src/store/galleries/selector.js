export const selectGalleries = state => {
   const filterInput= state.galleries.searchedText
   const galleriesList= state.galleries.galleriesList

   return galleriesList.filter(
      item=>item.user.first_name.toLowerCase().includes(filterInput.toLowerCase()) 
      || item.title.toLowerCase().includes(filterInput.toLowerCase())
      
      )
}

export const selectSearchedText = state => state.galleries.searchedText
export const selectMyGalleries = state => {
   const filterInput= state.galleries.searchedText
   const galleriesList= state.galleries.myGalleries

   return galleriesList.filter(
      item=>item.user.first_name.toLowerCase().includes(filterInput.toLowerCase()) 
      || item.title.toLowerCase().includes(filterInput.toLowerCase())
      
      )
}
export const selectGalleriesListLength = state => state.galleries.galleriesList.length
export const selectPageNumber= state => state.galleries.pageNum
export const selectMyGalleryPageNumber= state => state.galleries.myGallPageNum
export const selectSingleGallery= state => state.galleries.singleGallery
export const selectAuthorsGalleries = state => {
   const filterInput= state.galleries.searchedText
   const galleriesList= state.galleries.authorsGalleries

   return galleriesList.filter(
      item=>item.user.first_name.toLowerCase().includes(filterInput.toLowerCase()) 
      || item.title.toLowerCase().includes(filterInput.toLowerCase())
      
      )

    }
    
export const selectAuthorsGalleryPageNumber = state => state.galleries.authorsGallPageNum
export const selectAuthorId = state => state.galleries.authorId
export const selectGalleriesListChecker = state => state.galleries.galleriesListCheck
export const selectMyGalleriesListChecker = state => state.galleries.myGalleriesListCheck
export const selectAuthorsGalleriesListChecker = state => state.galleries.authorsGalleriesListCheck