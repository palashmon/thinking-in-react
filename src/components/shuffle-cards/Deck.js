import React, { Component } from 'react';
import Card from './Card';

export default class Deck extends Component {
  render() {
    const card1 = {
      id: 1,
      rank: 'A',
      suit: '♥'
    };
    const card2 = {
      id: 2,
      rank: '2',
      suit: '♥'
    };

    return (
      <div className="container shadow-lg p-4 mb-4">
        <div className="pb-2 mt-4 mb-4 border-bottom">
          <h1>Shuffle Deck Of Cards</h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Card {...card1} />
            <Card {...card2} />
          </div>
        </div>
      </div>
    );
  }
}
