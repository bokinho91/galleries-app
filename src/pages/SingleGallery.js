import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import AddComment from '../components/AddComment'
import Comments from '../components/Comments'
import useFormatDate from '../hooks/FormatDateHook'
import { getComments } from '../store/comments/slice'
import { selectSingleGallery } from '../store/galleries/selector'
import { getSingleGallery, deleteGallery } from '../store/galleries/slice'
import { selectActiveUser } from '../store/users/selector'


function SingleGallery() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const gallery = useSelector(selectSingleGallery)
    const activeUser= useSelector(selectActiveUser)
    const history=useHistory()
    useEffect(() => {
      dispatch(getSingleGallery(id))
      dispatch(getComments(id))

    }, [])
    
 const created_ad = useFormatDate(gallery.created_at)
  
 const handleDelete = () =>{
   const question='Do you want to delete this gallery? Type YES or NO'
   if(prompt(question).toLocaleLowerCase()==='yes'){

     dispatch(deleteGallery({
       galleryData: gallery,
       meta: {
         onSuccess: () => {
           history.push("/my-galleries")
          }
        }
      }))
    }
 }

  return (
    <div>
       
       
        <h1>{gallery.title}</h1>

      {activeUser.id==gallery.user_id &&
        <div className="edit">
          <Link to={`/edit-gallery/${gallery.id}`}><button className="btn btn-warning mr-2">Edit</button></Link>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      }
      
    
        
        {gallery.user &&
        <div>
            <small>Author: </small> 
            <Link to={`/authors/${gallery.user_id}`}>
                <p>
                    <strong>{`${gallery.user.first_name} ${gallery.user.last_name}`}</strong>
                </p>
            </Link>
                <small>Created at:</small> <strong>{created_ad}</strong>
        </div>
        }

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {gallery.images &&
                            gallery.images.map((image,index)=>(
                                 <Link to={{pathname:image.image_url}} target="_blank"> 
                                <div key={image.id} className={`carousel-item ${index===0 ? 'active' :'' }`}>
                                 <img className="d-block w-100" src={image.image_url} alt="First slide"/>
                                </div>
                                 </Link>  
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