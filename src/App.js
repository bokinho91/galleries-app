
import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
          <Router>
            <Nav/>

            <div className="container">
            <Switch>
                
                <Route path='/register' exact>
                    <Register/>
                </Route>

                <Route path='/login' exact>
                    <Login/>
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
