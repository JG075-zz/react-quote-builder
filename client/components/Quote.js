import React from 'react';
import QuoteItems from './QuoteItems';
import Total from './Total';

const Quote = React.createClass({
  render() {
    return (
      <div className="quote">
        <h2>Update quote</h2>
        <span className="cancel">Cancel quote</span>
        <QuoteItems {...this.props} />
        <Total />
        <span>Discard Changes</span>
        <button>Update</button>
      </div>
    );
  }
});

export default Quote;
