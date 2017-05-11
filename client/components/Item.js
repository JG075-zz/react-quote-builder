import React from 'react';

const Item = React.createClass({
  render() {
    return (
      <li>
        <span className="item-name">{this.props.item.name}</span>
        <span className="item-price">
          {this.props.item.currency}
          {this.props.item.amount}
        </span>
      </li>
    );
  }
});

export default Item;
