import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageNumber, selectGalleriesListLength } from '../store/galleries/selector'
import { pageNumberDecrement, pageNumberIncrement } from '../store/galleries/slice'



function Pagination() {
const dispatch =useDispatch()
const pageNum = useSelector(pageNumber)
const galleriesListLength = useSelector(selectGalleriesListLength)

  return (
    <div>

        <strong>Page number {pageNum}</strong>
        
              <div className="load-more">

                {galleriesListLength<pageNum*10 &&
                <button className="btn btn-success"  onClick={()=>dispatch(pageNumberDecrement())}>
                   Load less galleries
                </button>
                }

                {galleriesListLength>pageNum*10 &&
                <button className="btn btn-success"  onClick={()=>dispatch(pageNumberIncrement())}>
                   Load more galleries
                </button>
                }

              </div>
           
        
    </div>
  )
}

export default Pagination
