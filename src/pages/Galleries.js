import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilterGalleries from '../components/FilterGalleries';
import GalleryCard from '../components/GalleryCard';
import { selectGalleries, selectGalleriesListChecker, selectPageNumber } from '../store/galleries/selector';
import { loadGalleries } from '../store/galleries/slice';


function Galleries() {
  const dispatch = useDispatch()
  const galleriesList = useSelector(selectGalleries)
  const pageNumber = useSelector(selectPageNumber)
  const flag = useSelector(selectGalleriesListChecker)

  useEffect(() => {
      dispatch(loadGalleries({
        data: pageNumber,
        meta: "notButton",
        flag: flag
      })) 
  }, [])
  
  

  return (
    <div>

    {galleriesList &&
    <FilterGalleries/>
    }

    <div className='row d-flex justify-content-center pl-2 pr-2'>
       {galleriesList.length>0 ? 
       
       galleriesList.map(gallery=>(
         <GalleryCard key={gallery.id} gallery={gallery}/> 
       )) 
       
       : <h1>There is no Galleries to show</h1>}
      </div>

      {galleriesList.length>=10  &&
            <div className="load-more"> 
               <button className="btn btn-success"  onClick={()=>dispatch(loadGalleries({data:pageNumber, meta:"Button", flag:flag}))}>
                  Load more galleries
               </button>
            </div>
      }
    
    
    </div>
  )
}

export default Galleries