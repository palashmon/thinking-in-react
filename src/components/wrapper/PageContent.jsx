import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import NoMatch from './NoMatch.jsx';
import FilterableProductTable from '../simple-product-list/FilterableProductTable.jsx';
import Cards from '../card-list/Cards.jsx';
import Deck from '../shuffle-cards/Deck.jsx';
import JsonApi from 'api';

// Fetch mock data from JsonApi
const products = JsonApi.getAllProducts();
const cards = JsonApi.getAllCards();

// Updated to use React Router v6 API
function PageContent() {
  return (
    <div id="page-content-wrapper">
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<FilterableProductTable products={products} />} />
          <Route path="/card" element={<Cards cards={cards} />} />
          <Route path="/shuffle-cards" element={<Deck />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default PageContent;
