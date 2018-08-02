import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  render() {
    return (
      <div className="container">
        <div className="details-container">Simple Product Table</div>
        <div className="content-main">
          <SearchBar />
          <ProductTable products={this.props.products} />
        </div>
      </div>
    );
  }
}
