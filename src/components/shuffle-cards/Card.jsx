import React, { Component } from 'react';
import CardTop from './CardTop.jsx';
import CardNumber from './CardNumber.jsx';
import CardBottom from './CardBottom.jsx';

export default class Card extends Component {
  render() {
    const { suit, rank, color } = this.props;
    return (
      <div className={`card-main ${color}`}>
        <CardTop suit={suit} />
        <CardNumber rank={rank} />
        <CardBottom suit={suit} />
      </div>
    );
  }
}
