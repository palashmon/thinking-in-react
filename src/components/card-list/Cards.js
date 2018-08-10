import React, { Component } from 'react';
import Card from './Card';

export default class Cards extends Component {
  render() {
    const cards = [];
    this.props.cards.forEach((card, i) => {
      cards.push(<Card card={card} key={i + 1} />);
    });

    return (
      <div className="container shadow-lg p-4 mb-4">
        <div className="card-columns">{cards}</div>
      </div>
    );
  }
}
