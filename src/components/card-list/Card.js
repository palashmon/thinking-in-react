import React, { Component } from 'react';
import CardImageTop from './CardImageTop';
import CardBody from './CardBody';

export default class Card extends Component {
  render() {
    const { src, title, text } = this.props.card;

    return (
      <div className="card" style={{ width: 286 }}>
        <CardImageTop src={src} />
        <CardBody title={title} text={text} />
      </div>
    );
  }
}
