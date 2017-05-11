import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import QuoteItems from '../../client/components/QuoteItems';
import Item from '../../client/components/Item';

describe('<QuoteItems>', function () {

  it('should have a wrapping div', function () {
    const wrapper = shallow(<QuoteItems items = {[]}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should create a \'Item\' component for every item in \'items\' array', function() {
    const wrapper = mount(<QuoteItems items = {[1,2,3]}/>);
    expect(wrapper.find('Item')).to.have.length(3);
  });

});
