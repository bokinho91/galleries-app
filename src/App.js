
import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Galleries from './pages/Galleries';
import Login from './pages/Login';
import Register from './pages/Register';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateNewGallery from './pages/CreateNewGallery';
import SingleGallery from './pages/SingleGallery';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from './store/users/selector';
import MyGalleries from './pages/MyGalleries';
import { getActiveUser } from './store/users/slice';
import GalleriesByAuthor from './pages/GalleriesByAuthor';
import EditGallery from './pages/EditGallery';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const isAuthenticated = token;
  
  
  useEffect(() => {
    if(localStorage.key("token")){
      dispatch(getActiveUser())
    }
  }, [token]);
  return (
    <div className="App">
          <Router>
            <Nav/>

            <div className="container">
            <Switch>

                <Route path='/' exact>
                    <Galleries/>
                </Route>

                
                <Route path='/register' exact>
                    {!isAuthenticated ? <Register/> : <Redirect to="/" />}
                </Route>

                <Route path='/login' exact>
                    {!isAuthenticated ? <Login/> : <Redirect to="/" />}
                </Route>

                <Route path='/create' exact>
                {isAuthenticated ? <CreateNewGallery/> : <Redirect to="/" />}
                </Route>

                <Route path='/edit-gallery/:id' exact>
                {isAuthenticated ? <EditGallery/> : <Redirect to="/" />}
                </Route>

                <Route path='/authors/:id' exact>
                {isAuthenticated ? <GalleriesByAuthor/> : <Redirect to="/" />}
                </Route>

                <Route path='/galleries/:id' exact>
                {isAuthenticated ? <SingleGallery/> : <Redirect to="/" />}
                </Route>

                <Route path='/my-galleries' exact>
                {isAuthenticated ? <MyGalleries/> : <Redirect to="/" />}
                </Route>

                <Route path='/' redirect exact>
                    <Redirect to="/" />
                </Route>
              
            </Switch>
            </div>
          </Router>

    </div>
  );
}

export default App;
