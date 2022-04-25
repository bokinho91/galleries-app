import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addNewGallery } from '../store/galleries/slice'


function CreateNewGallery() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [newGallery, setNewGallery] = useState({
        title:"",
        description:"",
        images_url:[""]
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(addNewGallery({
            galleryData: newGallery,
            meta: {
                onSuccess: () => {
                    history.push("/my-galleries")
                }
            }
        }))
    }

    const addInputField = () => {
           setNewGallery({...newGallery, images_url: [...newGallery.images_url, ""]})
    }

    const removeInputField = () => {
        setNewGallery({...newGallery, images_url: [...newGallery.images_url.slice(0,-1)]})
    }

    function editImageUrl(index, url) {
        setNewGallery({
            ...newGallery,
            images_url: [
                ...newGallery.images_url.slice(0, index),
                url,
                ...newGallery.images_url.slice(index+1,newGallery.images_url.length),
            ]
        })
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

            
                <label>Image URL:</label>
                {newGallery.images_url.map((img,index)=>(
                    <div key={index} className="form-group d-flex">
                        <input required value={img} type="text" onChange={({target})=> editImageUrl(index,target.value)} className='form-control' name=""  />
                        
                        {newGallery.images_url.length > 1 && 
                        <div className='d-flex justify-content-between align-items-center'>
                        <button type='button'  className='btn btn-info ml-2'>&uarr;</button>
                        <button type='button'  className='btn btn-info ml-2'>&darr;</button>
                            {index===newGallery.images_url.length-1 &&
                        <button type='button' className="btn btn-danger" onClick={removeInputField}>X</button>
                            }
                        </div>
                        }
                    </div>
                ))}
                
                <button onClick={addInputField} type='button' className='btn btn-primary m-2 d-block'>Add another URL</button>
            
            
            <button type="submit" className="btn btn-success">Add Gallery</button>
        </form>
    </div>
    </div>  
  )
}

export default CreateNewGallery