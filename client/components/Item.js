import React from 'react';

const Item = React.createClass({
  render() {
    return (
      <li>
        <span>{this.props.item.name}</span>
        <span>
          {this.props.item.currency}
          {this.props.item.amount}
        </span>
      </li>
    );
  }
});

export default Item;
