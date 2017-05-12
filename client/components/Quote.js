import React from 'react';
import QuoteItems from './QuoteItems';
import Total from './Total';

const Quote = React.createClass({

  confirmDelete() {
    const confirmResult = confirm("Are you sure you want to cancel this quote?");
    if (confirmResult) this.props.cancelQuote();
  },

  checkLiveEdits() {
    let liveEdit = false;
    this.props.items.forEach((item) => {
      if (item.toggleEdit) liveEdit = true;
    })
    if (!liveEdit) this.props.updateQuote();
  },

  render() {
    return (
      <div className="quote">
        <h2>Update quote</h2>
        { this.props.editMode ?
          <span className="cancel link" onClick={this.confirmDelete}>Cancel quote</span>
          : <span className="amend link"
                onClick={this.props.switchEditMode.bind(null, true)}>Amend quote</span>
        }
        <QuoteItems {...this.props} />
        <Total {...this.props} />
        { this.props.editMode ? <div className="quote-buttons">
          <span className="discard link"
            onClick={this.props.switchEditMode.bind(null, false)}>Discard Changes</span>
          <button onClick={this.checkLiveEdits}>Update</button>
        </div> : null }
      </div>
    );
  }
});

export default Quote;
