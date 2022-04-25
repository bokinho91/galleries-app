import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { selectSingleGallery } from '../store/galleries/selector'
import { editGallery } from '../store/galleries/slice'


function EditGallery() {
    const galleryData=useSelector(selectSingleGallery)
    const dispatch = useDispatch()
    const history = useHistory()
    const [gallery, setGallery] = useState({
        id:galleryData.id,
        title:galleryData.title,
        description:galleryData.description,
        images_url:[...galleryData.images.map(img=>img.image_url)]
    })
    
    console.log(gallery.images_url);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(editGallery({
            galleryData: gallery,
            meta: {
                    onSuccess: () => {
                        history.push(`/galleries/${gallery.id}`)
                    }
                }
            
        }))
    }


const addInputField = () => {
        setGallery({...gallery, images_url: [...gallery.images_url, '']})
 }

 function editImageUrl(index, url) {
     setGallery({
         ...gallery,
         images_url: [
             ...gallery.images_url.slice(0, index),
             url,
             ...gallery.images_url.slice(index+1, gallery.images_url.length),
         ]
     })
 }


  return (
    <div className="d-flex align-items-center justify-content-center">

    <div className='col-md-6'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input required value={gallery.title} onChange={({target})=>setGallery({...gallery, title: target.value})} type="text" minLength="2" maxLength="255" className="form-control" placeholder="Gallery title" id="title"/>
            </div>

            <div className="form-group">
                <label htmlFor="title">Gallery description:</label>
                <textarea name="" value={gallery.description} id="" onChange={({target})=>setGallery({...gallery, description: target.value})} className="form-control" cols="30" rows="5">
                    {gallery.description}
                </textarea>
            </div>

            
                <label>Image URL:</label>
               
                {gallery.images_url.map((img,index)=>(
                    <div key={index} className="form-group d-flex">
                    <input value={img} type="text" onChange={({target})=> editImageUrl(index,target.value)} className='form-control w-75' name=""  />
                        {/* {index>0 &&
                            <button type='button' onClick={()=>moveUp(index)} className='btn btn-info ml-2'>&uarr;</button>
                        } */}
                    </div>
                ))}
            

                
                <button onClick={addInputField} type='button' className='btn btn-primary m-2 d-block'>Add another URL</button>
            
            
            <button type="submit" className="btn btn-success mr-2">Submit</button>
            <Link to={`/galleries/${galleryData.id}`}><button type="button" className="btn btn-danger">Cancel</button></Link> 
        </form>
    </div>
    </div>  
  )
}

export default EditGallery