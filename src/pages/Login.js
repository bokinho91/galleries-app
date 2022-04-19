import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../store/users/slice'


function Login() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [user, setUser] = useState({
        email:"",
        password:"",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({
            credentials: user,
            meta: {
                onSuccess: () => {
                    history.push("/home")
                }
            }
        }))
    }
    
    
      return (
        <div className="d-flex align-items-center justify-content-center">
    
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
        </div>  
      )
}

export default Login