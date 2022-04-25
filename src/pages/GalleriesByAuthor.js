import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import FilterGalleries from '../components/FilterGalleries'
import GalleryCard from '../components/GalleryCard'
import { selectAuthorsGalleries,selectAuthorsGalleryPageNumber,selectAuthorId,selectAuthorsGalleriesListChecker } from '../store/galleries/selector'
import { getAuthorsGalleries, setAuthorsGalleriesEmpty, setValueToAuthorsGalleriesListCheck } from '../store/galleries/slice'


function GalleriesByAuthor() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const galleriesList =useSelector(selectAuthorsGalleries)
    const pageNumber = useSelector(selectAuthorsGalleryPageNumber)
    const authorId = useSelector(selectAuthorId)
    const flag = useSelector(selectAuthorsGalleriesListChecker)
    const location = useLocation()

    console.log('pagenum',pageNumber);
    console.log('flag',flag);
    setValueToAuthorsGalleriesListCheck(false)
    setAuthorsGalleriesEmpty()   
useEffect(() => {
   
   
    dispatch(getAuthorsGalleries({
    authorId,
    data: {pageNumber, id},
    meta: "notButton",
    flag
  }))
}, [location])


    
  return (
    <div>
  <div>

  {galleriesList &&
      <FilterGalleries/>
    }
  
    <div className='row d-flex justify-content-center pl-2 pr-2'>
       {galleriesList ? 
       
       galleriesList.map(gallery=>(
        <GalleryCard key={gallery.id} gallery={gallery}/> 
       ))
        : <p>Loading galleries...</p>
    }
      </div>

            {galleriesList>=10 &&
            <div className="load-more"> 
               <button className="btn btn-success"  onClick={()=>dispatch(getAuthorsGalleries({data: {pageNumber,id},meta: "Button",flag: flag}))}>
                  Load more galleries
               </button>
            </div>
            }
    
    </div>

    </div>
  )
}

export default GalleriesByAuthor