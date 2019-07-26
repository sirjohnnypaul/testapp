import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Add from './components/Add';
import Details from './components/Details';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details/:itemdata' component={Details} />
            <Route exact path='/add' component={Add} />
          </Switch>  
    </div>
  </BrowserRouter>
  );
}

export default App;
