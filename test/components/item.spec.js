import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Item from '../../client/components/Item';

let mockProps = {
  item: {
    name: "Lemon",
    currency: "£",
    amount: "345.60",
    toggleEdit: false
  },
  toggleEdit: sinon.stub(),
  deleteItem: sinon.stub(),
  saveItem: sinon.stub()
};

describe('<Item>', function() {

  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<Item {...mockProps} editMode={true}/>);
  });

  it('should display the item prop\'s name', function() {
    expect(wrapper.find(".item-name").text()).to.eql('Lemon');
  });

  it('should display the item prop\'s price', function() {
    expect(wrapper.find(".item-price").text()).to.eql('£345.60');
  });

  it('should display an edit link when editMode is true', function() {
    expect(wrapper.find(".edit-item")).to.have.length(1);
  });

  it('should not display an edit link when editMode is false', function() {
    wrapper = shallow(<Item {...mockProps} editMode={false}/>);
    expect(wrapper.find(".edit-item")).to.have.length(0);
  });

  it('should show three inputs when \'edit\' link is clicked', function() {
    mockProps.item.toggleEdit = true;
    wrapper = shallow(<Item {...mockProps} editMode={true}/>);
    expect(wrapper.find("input")).to.have.length(3);
  });

  it("should change the edit link to save link", function() {
    expect(wrapper.find(".save-item")).to.have.length(1);
    expect(wrapper.find(".edit-item")).to.have.length(0);
  });

  it("should show the delete link", function() {
    expect(wrapper.find(".delete-item")).to.have.length(1);
  });

});
