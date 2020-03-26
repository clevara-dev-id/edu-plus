import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BaseRoute from './routes'
import ApplicationLayout from './views/ApplicationLayout'

function App() {
  return (
        <div className="App">
          <Router>
              <ApplicationLayout>
                <BaseRoute />
              </ApplicationLayout>
          </Router>
      </div>
  );
}

export default App;
