import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import QuoteItems from '../../client/components/QuoteItems';
import Item from '../../client/components/Item';

let mockProps = {
  switchEditMode: sinon.stub(),
  cancelQuote: sinon.stub(),
  toggleEdit: sinon.stub(),
  addItem: sinon.stub(),
  items: [{name: "test"}],
  editMode: true
};

describe('<QuoteItems>', function() {

  it('should have a wrapping div', function() {
    const wrapper = shallow(<QuoteItems items = {[]}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should create a \'Item\' component for every item in \'items\' array', function() {
    const wrapper = mount(<QuoteItems items = {[1,2,3]}/>);
    expect(wrapper.find('Item')).to.have.length(3);
  });

  it("should not show \'+ Add quote item\' when editMode is false", function() {
    const wrapper = shallow(<QuoteItems items = {[]} editMode={false}/>);
    expect(wrapper.find('.add-quote-item')).to.have.length(0);
  });

  it("should show 3 inputs when \'+ Add quote item\' is clicked", function() {
    mockProps.addItem.returns({
      type: 'ADD_ITEM'
    });
    const wrapper = mount(<QuoteItems {...mockProps}/>);
    wrapper.find('.add-quote-item').simulate('click');
    expect(wrapper.find('li')).to.have.length(1);
  });

});
