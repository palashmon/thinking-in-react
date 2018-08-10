import React, { Component } from 'react';
import CardTitle from './CardTitle';
import CardText from './CardText';

export default class CardBody extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="card-body">
        <CardTitle title={title} />
        <CardText text={text} />
      </div>
    );
  }
}
