import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import AddComment from '../components/AddComment'
import Comments from '../components/Comments'
import { getComments } from '../store/comments/slice'
import { selectSingleGallery } from '../store/galleries/selector'
import { getSingleGallery } from '../store/galleries/slice'


function SingleGallery() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const gallery = useSelector(selectSingleGallery)
    useEffect(() => {
      dispatch(getSingleGallery(id))
      dispatch(getComments(id))
    }, [])
    

  return (
    <div>
       
       {gallery &&
        <h1>{gallery.title}</h1>
      }
    
        
        <p>
            <small>Author: </small> 
            <Link to={`/authors/${gallery.user_id}`}>
                {gallery.user &&
                <p>
                    <strong>{`${gallery.user.first_name} ${gallery.user.last_name}`}</strong>
                </p>
                }
            </Link>
                <small>Created at:</small> <strong>{gallery.created_at}</strong>
        </p>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {gallery.images &&
                            gallery.images.map((image,index)=>(
                                <div key={image.id} className={`carousel-item ${index==0 ? 'active' :'' }`}>
                                    <img className="d-block w-100" src={image.image_url} alt="First slide"/>
                                </div>
                            ))
                        }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <Comments/>
                <hr/>
                <AddComment/>
    </div>
  )
}

export default SingleGallery