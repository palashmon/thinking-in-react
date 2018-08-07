import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <Link to="/">Thinking in React</Link>
          </li>
          <li>
            <Link to="/product">Product List</Link>
          </li>
          <li>
            <Link to="/card">Card List</Link>
          </li>
        </ul>
      </div>
    );
  }
}
