import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewGallery } from '../store/galleries/slice'


function CreateNewGallery() {
    const dispatch = useDispatch()
    
    const [newGallery, setNewGallery] = useState({
        title:"",
        description:"",
        images_url:[]
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newGallery);
        dispatch(addNewGallery(newGallery))
    }

    const addInputField = () => {
        const inputContainer = document.getElementById("inputFields")

        inputContainer.innerHTML += `<div class="form-group">
                                    <input required
                                    onChange=${({target})=>setNewGallery({...newGallery, images_url: [...newGallery.images_url, target.value]})}
                                    type="text" class="form-control" placeholder="ex. http://placeimg.com/640/480/city.png"/>
                                    </div>`

    }

  return (
    <div className="d-flex align-items-center justify-content-center">

    <div className='col-md-6'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input required value={newGallery.title} onChange={({target})=>setNewGallery({...newGallery, title: target.value})} type="text" minLength="2" maxLength="255" className="form-control" placeholder="Gallery title" id="title"/>
            </div>

            <div className="form-group">
                <label htmlFor="title">Gallery description:</label>
                <textarea name="" value={newGallery.description} id="" onChange={({target})=>setNewGallery({...newGallery, description: target.value})} className="form-control" cols="30" rows="5">
                    
                </textarea>
            </div>

            <div className="form-group">

                <label htmlFor="title">Image URL:</label>
                <div id="inputFields">

                <div className="form-group">
                <input required value={newGallery.images_url[0]} onChange={({target})=>setNewGallery({...newGallery, images_url: [...newGallery.images_url, target.value]})} type="text" className="form-control" placeholder="ex. http://placeimg.com/640/480/city.png" id="title"/>
                
                </div>

                </div>
                <button onClick={addInputField} type='button' className='btn btn-success mt-2'>Add another URL</button>
            </div>
            
            <button type="submit" className="btn btn-primary">Add Gallery</button>
        </form>
    </div>
    </div>  
  )
}

export default CreateNewGallery