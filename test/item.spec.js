import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Item from '../client/components/Item';

describe('<Item>', function () {

  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<Item item={{
      name: "Lemon",
      currency: "£",
      amount: "345.60"
    }}/>);
  })

  it('should display the item prop\'s name', function () {
    expect(wrapper.find(".item-name").text()).to.eql('Lemon');
  });

  it('should display the item prop\'s name', function () {
    expect(wrapper.find(".item-price").text()).to.eql('£345.60');
  });


});
