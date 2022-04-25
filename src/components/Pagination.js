import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectPageNumber, selectGalleriesListLength } from '../store/galleries/selector'
import { loadGalleries, pageNumberDecrement } from '../store/galleries/slice'



function Pagination() {
const dispatch =useDispatch()
const pageNumber = useSelector(selectPageNumber)
const galleriesListLength = useSelector(selectGalleriesListLength)



  return (
    <div>

        <strong>Page number {pageNumber}</strong>
        
              <div className="load-more">
               
                <button className="btn btn-success"  onClick={()=>dispatch(loadGalleries(pageNumber))}>
                   Load more galleries
                </button>
                

              </div>
           
        
    </div>
  )
}

export default Pagination
