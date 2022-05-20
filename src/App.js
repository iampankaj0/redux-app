import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

const App = () => {
  return (
    <div style={{ 'marginTop': '50px' }}>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route path='/products/:productId' component={ProductDetails} />
          <Route>404 Not Found!</Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;