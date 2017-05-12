import React from 'react';

const Total = React.createClass({
  getTotals() {
    let total = 0;

    this.props.items.forEach((item) => {
      if (item.amount && !isNaN(item.amount)) total += parseFloat(item.amount);
    })

    total = total.toFixed(2);

    return {
      exVAT: total - (total * 0.2),
      VAT: total * 0.2,
      total
    }
  },

  render() {
    const totals = this.getTotals();
    return (
      <div>
        <div>
          <div className="total-ex-vat">
            <strong>Total quote (excl. VAT)</strong>
            <p>{"£" + totals.exVAT}</p>
          </div>
          <div className="vat">
            <strong>VAT</strong>
            <p>{"£" + totals.VAT}</p>
          </div>
        </div>
        <div className="total-incl-vat">
          <strong>Total quote (incl. VAT)</strong>
          <p>{"£" + totals.total}</p>
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
