import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BaseRoute from './routes'

function App() {
  return (
        <div className="App">
        <Router>
            <BaseRoute />
        </Router>
      </div>
  );
}

export default App;
