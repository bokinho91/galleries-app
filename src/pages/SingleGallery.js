import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'


function SingleGallery() {
    const {id} = useParams()

  return (
    <div>SingleGallery {id}</div>
  )
}

export default SingleGallery