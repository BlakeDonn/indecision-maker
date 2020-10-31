import './App.scss';
import {Homepage} from '../HomePage/Homepage';
import Header from '../Header/Header';
import { Form } from '../Form/Form';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <Route 
          exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/form'>
          <Form />
        </Route>
      </div>
    );
  }
}

export default App;
