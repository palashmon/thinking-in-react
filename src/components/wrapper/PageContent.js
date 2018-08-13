import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';
import FilterableProductTable from '../simple-product-list/FilterableProductTable';
import Cards from '../card-list/Cards';
import Deck from '../shuffle-cards/Deck';
import JsonApi from 'api';

// Fetch mock data from JsonApi
const products = JsonApi.getAllProducts();
const cards = JsonApi.getAllCards();

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default class PageContent extends Component {
  render() {
    return (
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" render={props => <FilterableProductTable {...props} products={products} />} />
            <Route path="/card" render={props => <Cards {...props} cards={cards} />} />
            <Route path="/shuffle-cards" component={Deck} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}
