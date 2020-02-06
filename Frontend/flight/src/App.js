import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" component={Navbar}/>
        <Route path="/" component={Form}/>
      </Router>
    </React.Fragment> 
  );
}

export default App;
