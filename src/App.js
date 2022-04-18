
import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
          <Router>
            <Nav/>

            <div className="container">
            <Switch>
                
                <Route path='/' exact>
                    
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
