import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { addComment } from '../store/comments/slice'


function AddComment() {
const [comment, setComment] = useState("")
const dispatch = useDispatch()
const {id} =useParams()

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addComment({
        body: comment, 
        gallery_id: id
    }))
    setComment("")
}


  return (
    <div>
        <form onSubmit={e=>handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="comment">Add new comment here:</label>
                <textarea value={comment} onChange={({target})=>setComment(target.value)} className="form-control" id="comment" rows="3"></textarea>

                <button className="btn btn-info mt-2">Add Comment</button>
             </div>
        </form>
    </div>
  )
}

export default AddComment