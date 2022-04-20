import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectImagesList } from '../store/galleries/selector'
import { addNewGallery } from '../store/galleries/slice'


function CreateNewGallery() {
    const dispatch = useDispatch()
    const [images, setImages] = useState([])

    const [newGallery, setNewGallery] = useState({
        title:"",
        description:"",
        images_url:[""]
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //dispatch(addNewGallery(newGallery))
    }

    const addInputField = () => {
           
    }

    function editImageUrl(image, url) {
        const index = images.findIndex((img) => img == image);
        console.log({
          images,
          index,
          image,
          url,
        });
        setImages([
          ...images.slice(0, index),
          { image_url: url },
          ...images.slice(index + 1, images.length),
        ]);

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
                    <div key={index} className="form-group d-flex">
                        <input value={newGallery.images_url[index+1]} type="text" onChange={({target})=> editImageUrl(img,target.value)} className='form-control w-75' name="" id="" />
                        <button type='button' className='btn btn-info ml-2'>&uarr;</button>
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