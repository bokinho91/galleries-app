
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

function App() {
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
                    <Register/>
                </Route>

                <Route path='/login' exact>
                    <Login/>
                </Route>

                <Route path='/create' exact>
                    <CreateNewGallery/>
                </Route>

                <Route path='/galleries/:id' exact>
                    <SingleGallery/>
                </Route>

                <Route path='/:myGalleries' exact>
                    <Galleries/>
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
