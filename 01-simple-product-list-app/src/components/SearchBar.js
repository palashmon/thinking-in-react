import React, { Component } from 'react';

/**
 * Step 3: Identify The Minimal (but complete) Representation Of UI State
 * So finally, our state is:
 * The search text the user has entered
 * The value of the checkbox
 */
export default class SearchBar extends Component {
  // Call the callbacks passed as props to notify owner component
  // when onChange event on the inputs is fired
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  };
  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    const { filterText, inStockOnly } = this.props;

    return (
      <div className="content-header">
        <div className="content-info">
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="form-control input-block"
              value={filterText}
              onChange={this.handleFilterTextChange}
            />
            <p>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={this.handleInStockChange}
              />{' '}
              Only show products in stock
            </p>
          </form>
        </div>
      </div>
    );
  }
}
