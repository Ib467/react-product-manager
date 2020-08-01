import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Redirect, Link} from '@reach/router'

import AllProducts from './views/AllProducts'
import NewProduct from './views/NewProduct';
import SingleProduct from './views/SingleProduct'
import EditProduct from './views/EditProduct'

 
function App() {
  return (
    <div className="App">
      <Router>
        <AllProducts path = 'products' />
        {/* <Redirect from="/" to="products" noThrow /> */}
        <NewProduct path="/"></NewProduct>
        <SingleProduct path="/:id" />
        <EditProduct path="/:id/edit" />
        <Redirect from="/processing" to="/" noThrow />
      </Router>
       
    </div>
  );
}

export default App;
