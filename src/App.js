import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
