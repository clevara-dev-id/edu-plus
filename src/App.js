import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from 'react-router-dom'

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
