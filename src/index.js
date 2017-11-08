import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(<Router>
<div>
  <h1>Learning React Router</h1>
  <ul className='header'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
  <hr />
  <div className='content'>
  <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    </div>
</div>





</Router>
, document.getElementById('root'));
registerServiceWorker();
