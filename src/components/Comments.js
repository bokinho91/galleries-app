import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { selectComments } from '../store/comments/selector'
import { getComments } from '../store/comments/slice'


function Comments() {
    const comments = useSelector(selectComments)
    const {id} = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(getComments(id))
    }, [])

  return (
    <div>
        <h3>Comments:</h3>
        
        {comments.length>0 ?

            comments.map(comment=>(
                <div key={comment.id} className="card mb-2 p-2 text-left d-fex w-50">
                    <div className="card-detail d-flex justify-content-between align-items-center w-100">
                        <div className="author">
                            <small className='mr-2'>Author:</small>

                            {comment.user &&
                            <Link to={`/authors/${comment.user_id}`}>
                                <strong>
                                    {`${comment.user.first_name} ${comment.user.last_name}`}
                                </strong>
                            </Link>
                            }
                        </div>
                        <div className="created-at">
                            {comment.created_at}
                        </div>

                    </div>
                    <p>{comment.body}</p>
                </div>
            )) 
            : <p>There is no comments for this gallery</p>
        }
        </div>

  )
}

export default Comments