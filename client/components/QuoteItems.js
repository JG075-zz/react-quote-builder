import React from 'react';
import Item from './item';

const QuoteItems = React.createClass({
  render() {
    return (
      <div className="quote-items">
        <ul>
          {this.props.items.map((item, i) => <Item {...this.props} key={i} i={i} item={item} />)}
        </ul>
        {this.props.editMode ? <a href="#" className="add-quote-item" onClick={this.props.addItem}>+ Add quote item</a> : null }
      </div>
    );
  }
});

export default QuoteItems;
