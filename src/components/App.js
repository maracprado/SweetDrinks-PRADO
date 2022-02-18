import React from 'react';
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <ItemListContainer/>
    </React.Fragment>
  );
}

export default App;
