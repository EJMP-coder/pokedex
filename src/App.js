import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import AppNavigator from './components/AppNavigator';
import Pokedex from './containers/Pokedex';

function App() {
  return (
  <Router>
    <AppNavigator/>
    <Routes>
      
    
     
    <Route path='/' Component={Pokedex}/>
    
    </Routes>
    
  
  </Router>
  );
}

export default App;
