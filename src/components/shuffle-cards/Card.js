import React, { Component } from 'react';
import CardTop from './CardTop';
import CardNumber from './CardNumber';
import CardBottom from './CardBottom';

export default class Card extends Component {
  render() {
    const { suit, rank } = this.props;
    return (
      <div className="card-main">
        <CardTop suit={suit} />
        <CardNumber rank={rank} />
        <CardBottom suit={suit} />
      </div>
    );
  }
}
