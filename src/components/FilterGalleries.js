import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchedText } from '../store/galleries/slice'

function FilterGalleries() {
    const dispatch = useDispatch()
    const [searched, setSearched] = useState("")
    const searchGalleries = (e) => {
        e.preventDefault()
        dispatch(setSearchedText(searched))
      }


  return (
    <div className='filter row'>
    
    <form className='d-block col-md-6' onSubmit={(e)=>searchGalleries(e)}>
      <div className="input-group rounded mb-5">
        <input value={searched} onChange={({target})=>setSearched(target.value)} style={{height: "50px"}} type="search"
         className="form-control rounded mr-2" placeholder="Search galleries" aria-label="Search" aria-describedby="search-addon" />
        <button onClick={searchGalleries} className="btn btn-success">Filter</button>
      </div>
    </form>
   
    </div>
  )
}

export default FilterGalleries