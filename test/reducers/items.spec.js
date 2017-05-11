import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import items from '../../client/reducers/items';

describe('items', function () {

  const mockData = [
    {name: "Vodka"},
    {name: "Berries"},
    {name: "Ice"}];

  const action = {
    type: 'CANCEL_QUOTE',
  };

  it('should delete every item when action.type is \'CANCEL_QUOTE\'', function () {
    const result = items(mockData, action);
    expect(result).to.have.length(0);
  });

});
