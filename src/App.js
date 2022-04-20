
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Galleries from './pages/Galleries';
import Login from './pages/Login';
import Register from './pages/Register';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateNewGallery from './pages/CreateNewGallery';
import SingleGallery from './pages/SingleGallery';
import { useSelector } from 'react-redux';
import { selectToken } from './store/users/selector';

function App() {

  const haveToken = useSelector(selectToken)
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
                    {!haveToken ? <Register/> : <Redirect to="/" />}
                </Route>

                <Route path='/login' exact>
                    {!haveToken ? <Login/> : <Redirect to="/" />}
                </Route>

                <Route path='/create' exact>
                {haveToken ? <CreateNewGallery/> : <Redirect to="/" />}
                </Route>

                <Route path='/galleries/:id' exact>
                {haveToken ? <SingleGallery/> : <Redirect to="/" />}
                </Route>

                <Route path='/:myGalleries' exact>
                {haveToken ? <Galleries/> : <Redirect to="/" />}
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
