import React from 'react';
import Quote from './Quote';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Quote {...this.props} />
      </div>
    );
  }
});

export default Main;
