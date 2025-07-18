import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

/**
 * Step 4: Identify Where Your State Should Live
 * The common owner component is FilterableProductTable here
 * Add an instance property to reflect the initial state of your application
 * Then, pass filterText and inStockOnly to ProductTable and SearchBar as a prop.
 */
export default class FilterableProductTable extends Component {
  state = {
    filterText: '',
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
      <div className="container shadow-lg p-4 mb-4">
        <div className="pb-2 mt-4 mb-4 border-bottom">
          <h1>Simple Product Table</h1>
        </div>
        <div className="content-main">
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable products={this.props.products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
      </div>
    );
  }
}
