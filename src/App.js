import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


const App = () => {
    return (
        <>
      <Router>
        <Navbar />
        {/*<Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
    <Route path='/sign-up' component={SignUp} />
        </Switch>*/}
      </Router>
    </>

    );
};

export default App;
