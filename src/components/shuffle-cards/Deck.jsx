import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Deck extends Component {
  state = {
    cards: this.createDeck(),
    isDeckShuffled: false
  };

  createDeck() {
    const cards = [];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['♥', '♦', '♠', '♣'];
    let id = 1;
    const suitColor = {
      '♠': 'text-dark',
      '♣': 'text-dark',
      '♦': 'text-danger',
      '♥': 'text-danger'
    };

    for (let suit = 0; suit < suits.length; suit++) {
      for (let rank = 0; rank < ranks.length; rank++) {
        let card = {
          id: id++,
          rank: ranks[rank],
          suit: suits[suit],
          color: suitColor[suits[suit]]
        };
        cards.push(card);
      }
    }

    return cards;
  }

  // Using Fisher-Yates (aka Knuth) Shuffle algorithm
  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  onShuffleClick = () => {
    const clonedCards = [...this.state.cards];
    this.setState({ isDeckShuffled: true, cards: this.shuffle(clonedCards) });
  };
  onResetClick = () => {
    this.setState({ isDeckShuffled: false, cards: this.createDeck() });
  };

  render() {
    const { cards, isDeckShuffled } = this.state;

    return (
      <div className="container shadow-lg p-4 mb-4">
        <div className="pb-2 mt-4 mb-4 border-bottom">
          <h1>Shuffle Deck Of Cards</h1>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <button className={`btn btn-info mr-2 ${!isDeckShuffled ? 'd-none' : ''}`} onClick={this.onResetClick}>
              Reset
            </button>
            <button className="btn btn-info" onClick={this.onShuffleClick}>
              Shuffle
            </button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            {cards.map(card => (
              <Card {...card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
