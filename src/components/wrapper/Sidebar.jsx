import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
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
        <li>
          <Link to="/shuffle-cards">Shuffle Cards</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
