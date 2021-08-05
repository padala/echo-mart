import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import './App.css';
import Header from './components/partials/header';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
