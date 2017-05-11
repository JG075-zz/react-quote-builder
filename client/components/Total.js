import React from 'react';

const Total = React.createClass({
  render() {
    return (
      <div>
        <div>
          <div>
            <strong>Total quote (excl. VAT)</strong>
            <p>£100.00</p>
          </div>
          <div>
            <strong>VAT</strong>
            <p>£100.00</p>
          </div>
        </div>
        <div>
          <strong>Total quote (incl. VAT)</strong>
          <p>£100.00</p>
        </div>
        <div>
          <p>Plentific service fee is 10% of the total quote (excl. VAT).</p>
          <p>A 20% deposit will be requested from the customer.</p>
        </div>
      </div>
    );
  }
});

export default Total;
