import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { setSearchedText, resetSearchedText } from '../store/galleries/slice'

function FilterGalleries() {
    const dispatch = useDispatch()
    const location = useLocation()
    const [searched, setSearched] = useState("")
    const searchGalleries = (e) => {
        e.preventDefault()
        dispatch(setSearchedText(searched))
      }

 useEffect(() => {
    dispatch(resetSearchedText())
 }, [location])
      


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