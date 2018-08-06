import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

/**
 * Step 4: Identify Where Your State Should Live
 * The common owner component is FilterableProductTable here
 * Add an instance property to reflect the initial state of your application
 * Then, pass filterText and inStockOnly to ProductTable and SearchBar as a prop.
 */
export default class FilterableProductTable extends Component {
  state = {
    filterText: 'ball',
    inStockOnly: false
  };

  // Update app state on user input
  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText
    });
  };
  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly
    });
  };

  render() {
    const { filterText, inStockOnly } = this.state;

    return (
      <div className="container">
        <div className="details-container">Simple Product Table</div>
        <div className="content-main">
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      </div>
    );
  }
}
