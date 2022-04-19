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
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pageNum>1 &&
                <li className="page-item">
                
                <button className="page-link" onClick={()=>dispatch(pageNumberDecrement())}>
                    <span aria-hidden="true">&laquo; 10 less</span>
                    <span className="sr-only">Previous</span>
                </button>
                </li>
                }
            
                {galleriesListLength>10 &&
                <li className="page-item">
                <button className="page-link" href="#" aria-label="Next" onClick={()=>dispatch(pageNumberIncrement())}>
                    <span aria-hidden="true">10 more &raquo;</span>
                    <span className="sr-only">Next</span>
                </button>
                </li>
                }
            </ul>
        </nav>
    </div>
  )
}

export default Pagination
