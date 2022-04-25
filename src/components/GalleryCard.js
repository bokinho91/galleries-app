import React from 'react'
import { Link } from 'react-router-dom'
import useFormatDate from '../hooks/FormatDateHook'


function GalleryCard({gallery}) {
    const dateToShow=useFormatDate(gallery.created_at)
    
  return (
    
            
        <div className="card border-dark col-lg-2 col-sm-4 m-2" key={gallery.id}>
              <Link to={`/galleries/${gallery.id}`}><h4 className='text-center'>{gallery.title}</h4></Link>
              {gallery.images &&
                <div className="image">
                <img className='image-src' src={gallery.images[0].image_url} alt="" />
                </div>
                }

                {gallery.user &&
                <p>
                <small className='d-block text-center'>Author:</small> 
                <Link to={`/authors/${gallery.user_id}`}>
                      <strong>{gallery.user.first_name+ " "+ gallery.user.last_name}</strong>
                    </Link>
                </p>
                }
                <p className='text-center'>{dateToShow}</p>
                </div>
            
                
  )
}

export default GalleryCard