import React from 'react';
import Item from './item';

const QuoteItems = React.createClass({
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, i) => <Item {...this.props} key={i} i={i} item={item} />)}
        </ul>
        <span>+ Add quote item</span>
      </div>
    );
  }
});

export default QuoteItems;
