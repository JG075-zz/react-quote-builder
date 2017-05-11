import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import items from '../../client/reducers/items';

describe('items', function() {

  const mockData = [
    {name: "Vodka", toggleEdit: false},
    {name: "Berries", toggleEdit: false},
    {name: "Ice", toggleEdit: false}];

  it('should delete every item when action.type is \'CANCEL_QUOTE\'', function() {
    const result = items(mockData, {type: 'CANCEL_QUOTE'});
    expect(result).to.have.length(0);
  });

  it('should modify \'toggleEdit\' on item to be edited', function() {
    const result = items(mockData, {type: 'TOGGLE_EDIT_ITEM', i:1});
    expect(result[1].toggleEdit).to.be.true;
  });

});
