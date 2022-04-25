import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFormatDate from '../hooks/FormatDateHook'
import { selectComments } from '../store/comments/selector'
import { deleteComment, getComments } from '../store/comments/slice'
import { selectActiveUser} from '../store/users/selector'


function Comments() {
    const comments = useSelector(selectComments)
    const {id} = useParams()
    const dispatch = useDispatch()
    const activeUser = useSelector(selectActiveUser)
    
    useEffect(() => {
        dispatch(getComments(id))
    }, [])

    
  return (
    <div>
        <h3>Comments:</h3>
        
        {comments.length>0 ?

            comments.map(comment=>(
                <div key={comment.id} className="card mb-2 p-2 text-left d-fex w-80">
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

                        {activeUser.id===comment.user_id &&
                        <div className="buttons">
                            <button onClick={()=>dispatch(deleteComment(comment))} className="btn btn-danger">Delete</button>
                        </div>
                        }

                        <div className="created-at">
                            {useFormatDate(comment.created_at)}
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