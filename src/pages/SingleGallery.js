import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { selectSingleGallery } from '../store/galleries/selector'
import { getSingleGallery } from '../store/galleries/slice'


function SingleGallery() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const gallery= useSelector(selectSingleGallery)
    useEffect(() => {
      dispatch(getSingleGallery(id))
    }, [id])
    

  return (
    <div>
        <h1>{gallery.title}</h1>
        
    </div>
  )
}

export default SingleGallery