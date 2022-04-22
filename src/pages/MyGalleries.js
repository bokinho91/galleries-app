import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectMyGalleries, selectMyGalleryPageNumber } from '../store/galleries/selector'
import { getMyGalleries } from '../store/galleries/slice'



function MyGalleries() {
const dispatch = useDispatch()
const galleriesList =useSelector(selectMyGalleries)
const pageNumber = useSelector(selectMyGalleryPageNumber)

useEffect(() => {
  dispatch(getMyGalleries(pageNumber))
}, [])



  return (
    <div>
      <div>
    <div className='row d-flex justify-content-center pl-2 pr-2'>
       {galleriesList && 
       
       galleriesList.map(gallery=>(
          <div className="card border-dark col-lg-2 col-sm-4 m-2" key={gallery.id}>
              <Link to={`/galleries/${gallery.id}`}><h4>{gallery.title}</h4></Link>
              <div className="image">
              <img className='image-src' src={gallery.images[0].image_url} alt="" />
              </div>
              <p><small className='d-block text-center'>Author:</small> <Link to={`/authors/${gallery.user_id}`}><strong>{gallery.user.first_name+ " "+ gallery.user.last_name}</strong></Link></p>
              <p className='text-center'>{gallery.created_at}</p>
          </div>
       ))}
      </div>

            <div className="load-more"> 
               <button className="btn btn-success"  onClick={()=>dispatch(getMyGalleries(pageNumber))}>
                  Load more galleries
               </button>
            </div>
    
    </div>
    </div>
  )
}

export default MyGalleries