
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {  selectActiveUser, selectToken} from '../store/users/selector'
import {  logoutUser } from '../store/users/slice'


function Nav() {
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector(selectToken)
    const isAuthenticated = token;
    const activeUser=useSelector(selectActiveUser)
  

  const  handleLogOut = () => {
        dispatch(logoutUser({
            meta: {
                onSuccess: () => {
                    history.push("/")
                }
            }
        }))
    }

  return (
    <div className='bg-dark mb-2 p-2 d-flex justify-content-between'>
       
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link text-white">All Galleries</Link>
            </li>

            {isAuthenticated &&
            <li className="nav-item">
                <Link to="/my-galleries" className="nav-link text-white">My Galleries</Link>
            </li>
            }

            {isAuthenticated &&
            <li className="nav-item">
                <Link to="/create" className="nav-link text-white">Create New Gallery</Link>
            </li>
            }   

            {!isAuthenticated &&
            <li className="nav-item">
            <Link to="/register" className="nav-link text-white">Register</Link>
            </li>
            }

            {!isAuthenticated &&
            <li className="nav-item">
                <Link to="/login" className="nav-link text-white">Login</Link>
            </li>
            }
            
        

        </ul>

        
            <div className="user-data">
            {isAuthenticated && 
            <span>{`${activeUser.firstName} ${activeUser.lastName}`}</span>
            }
        
            {isAuthenticated &&
                <button onClick={handleLogOut} className="btn btn-danger ml-5">Logout</button>
            }
            </div>
    </div>
  )
}

export default Nav
