import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div class="content-header">
        <div class="content-info">
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
