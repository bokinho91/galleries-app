
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
import { selectActiveUser, selectToken } from './store/users/selector';
import MyGallery from './pages/MyGallery';
import { getActiveUser } from './store/users/slice';


function App() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const isAuthenticated = !!token;
  const activeUser = useSelector(selectActiveUser)
  if(activeUser){
    console.log(activeUser);
  }
  useEffect(() => {
    dispatch(getActiveUser())
  }, []);
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

                <Route path='/galleries/:id' exact>
                {isAuthenticated ? <SingleGallery/> : <Redirect to="/" />}
                </Route>

                <Route path='/:myGalleries' exact>
                {isAuthenticated ? <MyGallery/> : <Redirect to="/" />}
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
