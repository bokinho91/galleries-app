import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectImagesList } from '../store/galleries/selector'
import { addNewGallery } from '../store/galleries/slice'


function CreateNewGallery() {
    const dispatch = useDispatch()
    const [image, setImage] = useState("")

    const [newGallery, setNewGallery] = useState({
        title:"",
        description:"",
        images_url:[""]
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewGallery({...newGallery, images_url: [...newGallery.images_url, image]})

        console.log(newGallery);
        //dispatch(addNewGallery(newGallery))
    }

    const addInputField = () => {
            setNewGallery({...newGallery, images_url: [...newGallery.images_url, image]})
        
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

            
                <label htmlFor="title">Image URL:</label>
                {newGallery.images_url.map((img,index)=>(
                    <div key={index} className="form-group">
                        <input value={newGallery.images_url[index+1]} type="text" onChange={({target})=> setImage(target.value)} className='form-control' name="" id="" />
                        <button className='btn btn-info'>;arrowup;</button>
                    </div>
                ))}
            

                
                <button onClick={addInputField} type='button' className='btn btn-success m-2 d-block'>Add another URL</button>
            
            
            <button type="submit" className="btn btn-primary">Add Gallery</button>
        </form>
    </div>
    </div>  
  )
}

export default CreateNewGallery