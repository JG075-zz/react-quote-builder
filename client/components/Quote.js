import React from 'react';
import QuoteItems from './QuoteItems';
import Total from './Total';

const Quote = React.createClass({

  confirmDelete() {
    const confirmResult = confirm("Are you sure you want to cancel?");
    if (confirmResult) this.props.cancelQuote();
  },

  render() {
    return (
      <div className="quote">
        <h2>Update quote</h2>
        { this.props.editMode ?
          <a href="#" className="cancel" onClick={this.confirmDelete}>Cancel quote</a>
          : <a href="#" className="amend"
                onClick={this.props.switchEditMode.bind(null, true)}>Amend quote</a>
        }
        <QuoteItems {...this.props} />
        <Total />
        <a href="#" className="discard"
          onClick={this.props.switchEditMode.bind(null, false)}>Discard Changes</a>
        <button>Update</button>
      </div>
    );
  }
});

export default Quote;
