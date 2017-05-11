import React from 'react';
import Quote from './Quote';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          Quote Builder
        </h1>
        <Quote {...this.props} />
      </div>
    );
  }
});

export default Main;
