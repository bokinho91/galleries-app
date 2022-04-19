import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { selectToken } from '../store/users/selector'
import { logoutUser } from '../store/users/slice'


function Nav() {
    const dispatch = useDispatch()
    const history = useHistory()
    const haveToken = useSelector(selectToken)

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
    <div className='bg-dark mb-2 p-2'>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link text-white">All Galleries</Link>
            </li>

            {haveToken &&
            <li className="nav-item">
                <Link to="/my-galleries" className="nav-link text-white">My Galleries</Link>
            </li>
            }

            {haveToken &&
            <li className="nav-item">
                <Link to="/create" className="nav-link text-white">Create New Gallery</Link>
            </li>
            }   

            {!haveToken &&
            <li className="nav-item">
            <Link to="/register" className="nav-link text-white">Register</Link>
            </li>
            }

            {!haveToken &&
            <li className="nav-item">
                <Link to="/login" className="nav-link text-white">Login</Link>
            </li>
            }
            
            {haveToken &&
            <li className="nav-item">
                <button onClick={handleLogOut} className="btn btn-danger">Logout</button>
            </li>
            }
        

        </ul>

    </div>
  )
}

export default Nav
