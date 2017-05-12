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
    const result = items(mockData, {type: 'TOGGLE_EDIT_ITEM', i: 1});
    expect(result[1].toggleEdit).to.be.true;
  });

  it('should delete an item when action.type is \'DELETE_ITEM\'', function() {
    const result = items(mockData, {type: 'DELETE_ITEM', i: 2});
    expect(result).to.have.length(2);
  });

  it('should modify an item when action.type is \'SAVE_ITEM\'', function() {
    const result = items(mockData, {type: 'SAVE_ITEM', i: 2, name: 'Gin', amount: 340});
    expect(result[2].name).to.eql('Gin');
    expect(result[2].amount).to.eql(340);
  });

  it('should return state when action.type is \'SWITCH_EDIT_MODE\' and action.status is true', function() {
    const result = items(mockData, {type: 'SWITCH_EDIT_MODE', status: true});
    expect(result).to.have.length(3);
  });

  it('should return the previous state when action.type is \'SWITCH_EDIT_MODE\' and action.status is false', function() {
    items(mockData, {type: 'SWITCH_EDIT_MODE', status: true});
    const resultqwewq = items([], {type: 'SWITCH_EDIT_MODE', status: false});
    expect(resultqwewq).to.have.length(3);
  });

});
