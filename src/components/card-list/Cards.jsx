import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Cards extends Component {
  render() {
    const cards = [];
    this.props.cards.forEach((card, i) => {
      cards.push(<Card card={card} key={i + 1} />);
    });

    return (
      <div className="container shadow-lg p-4 mb-4">
        <div className="pb-2 mt-4 mb-4 border-bottom">
          <h1>Simple Social Card List</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-columns">{cards}</div>
          </div>
        </div>
      </div>
    );
  }
}
