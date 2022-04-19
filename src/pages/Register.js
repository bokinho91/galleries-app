import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../store/users/slice'


function Register() {
const dispatch = useDispatch()
const history = useHistory()

const [newUser, setNewUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    password_confirmation:"",
    terms_and_conditions:false
})

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser({
        credentials: newUser,
        meta: {
            onSuccess: () => {
                history.push("/")
            }
        }
    }))
}


  return (
    <div className="d-flex align-items-center justify-content-center">

    <div className='col-md-6'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="first_name">First Name:</label>
                <input required value={newUser.first_name} 
                onChange={({target})=>setNewUser({...newUser,first_name: target.value})} type="text" className="form-control" placeholder="First name" id="first_name"/>
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name:</label>
                <input required value={newUser.last_name} 
                onChange={({target})=>setNewUser({...newUser,last_name: target.value})} type="text" className="form-control" placeholder="Last name" id="last_name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input required value={newUser.email} 
                onChange={({target})=>setNewUser({...newUser, email: target.value})} type="email" className="form-control" placeholder="Enter email" id="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input value={newUser.password} 
                onChange={({target})=>setNewUser({...newUser, password: target.value})} type="password" className="form-control" placeholder="Enter password" id="pwd"/>
            </div>
            <div className="form-group">
                <label htmlFor="pwd_confirmation">Repeat password:</label>
                <input value={newUser.password_confirmation} 
                onChange={({target})=>setNewUser({...newUser, password_confirmation: target.value})} type="password" className="form-control" placeholder="Enter password" id="pwd_confirmation"/>
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" 
                 checked={newUser.terms_and_conditions}
                 onChange={({target})=>setNewUser({...newUser, terms_and_conditions: target.value==='on' ? true : false})}/> Accepted terms and conditions
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
    </div>  
  )
}

export default Register