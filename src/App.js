import Form from './components/Form.js'
import React from 'react';
import ReactDOM from 'react-dom';
import Submitted from './components/Submitted.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
   
      <Switch>
      <Route path="/" exact component={Form}></Route>
      <Route path="/Submitted" exact component={Submitted}></Route>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
