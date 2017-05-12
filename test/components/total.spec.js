import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Total from '../../client/components/Total';

describe('<Total>', function() {

  const wrapper = shallow(<Total items={[{amount: 150}, {amount: 150}]} />);

  it('should display a \'Total quote (excl. VAT)\' of £280', function() {
    expect(wrapper.find('.total-ex-vat p').text()).to.eql('£240.00');
  });

  it('should display a \'VAT\' of £40', function() {
    expect(wrapper.find('.vat p').text()).to.eql('£60.00');
  });

  it('should display a \'Total quote (incl. VAT)\' of £300', function() {
    expect(wrapper.find('.total-incl-vat p').text()).to.eql('£300.00');
  });

});
