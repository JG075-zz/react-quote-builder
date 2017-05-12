import React from 'react';
import Item from './item';

const QuoteItems = React.createClass({
  render() {
    return (
      <div className="quote-items">
        <ul>
          {this.props.items.map((item, i) => <Item {...this.props} key={i} i={i} item={item} />)}
        </ul>
        {this.props.editMode ? <span href="#" className="add-quote-item link" onClick={this.props.addItem}>+ Add quote item</span> : null }
      </div>
    );
  }
});

export default QuoteItems;
