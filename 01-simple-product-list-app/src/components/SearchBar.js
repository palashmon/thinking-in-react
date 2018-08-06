import React, { Component } from 'react';

/**
 * Step 3: Identify The Minimal (but complete) Representation Of UI State
 * So finally, our state is:
 * The search text the user has entered
 * The value of the checkbox
 */
export default class SearchBar extends Component {
  render() {
    return (
      <div className="content-header">
        <div className="content-info">
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="form-control input-block"
            />
            <p>
              <input type="checkbox" /> Only show products in stock
            </p>
          </form>
        </div>
      </div>
    );
  }
}
