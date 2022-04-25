import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Errors from '../components/Errors'
import { selectErrors } from '../store/users/selector'
import { loginUser, setErrorsToErrorsList } from '../store/users/slice'


function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const errors = useSelector(selectErrors)
    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    useEffect(() => {
        dispatch(setErrorsToErrorsList([]))
    }, [location])
    

    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({
            credentials: user,
            meta: {
                onSuccess: () => {
                    history.push("/")
                }
            }
        }))
    }
    
    
      return (
        <div className="d-flex align-items-center justify-content-center flex-column">
    
        <div className='col-md-6'>
            <form onSubmit={(e)=>handleSubmit(e)}>
             
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input required value={user.email} 
                    onChange={({target})=>setUser({...user, email: target.value})} type="email" className="form-control" placeholder="Enter email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input value={user.password} 
                    onChange={({target})=>setUser({...user, password: target.value})} type="password" className="form-control" placeholder="Enter password" id="pwd"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>

        <div> 
        {errors.map((error,index)=>(
            <Errors key={index} errors={error}/>
            ))}
        </div>
        </div>  
      )
}

export default Login