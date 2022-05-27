import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './containers/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

const App = () => {
  return (
    <div className='main-app_page'>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route path='/products/:productId' component={ProductDetails} />
        </Switch>
        <Redirect to='/' />
      </Router>

    </div>
  )
}

export default App;