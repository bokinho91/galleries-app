import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectGalleries, selectPageNumber } from '../store/galleries/selector';
import { loadGalleries } from '../store/galleries/slice';


function Galleries() {
  const dispatch = useDispatch()
  const galleriesList = useSelector(selectGalleries)
  const pageNumber = useSelector(selectPageNumber)

  useEffect(() => {
      dispatch(loadGalleries(pageNumber)) 
  }, [])
  


  return (
    <div>

    <div className="filter">
      <div className="input-group rounded mb-5">
        <input value={searched} onChange={({target})=>dispatch(setSearchedText(target.value))} style={{height: "50px"}} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button className="btn btn-success">Filter</button>
      </div>
    </div>

    <div className='row d-flex justify-content-center pl-2 pr-2'>
       {galleriesList ? 
       
       galleriesList.map(gallery=>(
          <div className="card border-dark col-lg-2 col-sm-4 m-2" key={gallery.id}>
              <Link to={`/galleries/${gallery.id}`}><h4>{gallery.title}</h4></Link>
              <div className="image">
              <img className='image-src' src={gallery.images[0].image_url} alt="" />
              </div>
              <p><small className='d-block text-center'>Author:</small> <Link to={`/authors/${gallery.user_id}`}><strong>{gallery.user.first_name+ " "+ gallery.user.last_name}</strong></Link></p>
              <p className='text-center'>{gallery.created_at}</p>
          </div>
       )) : <p>There is no Galleries to show</p>}
      </div>

      {galleriesList  &&
            <div className="load-more"> 
               <button className="btn btn-success"  onClick={()=>dispatch(loadGalleries(pageNumber))}>
                  Load more galleries
               </button>
            </div>
}
    
    
    </div>
  )
}

export default Galleries