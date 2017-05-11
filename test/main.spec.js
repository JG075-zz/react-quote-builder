import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Main from '../client/components/Main';
import Quote from '../client/components/Quote';

describe('<Main>', function () {

  it('should have a wrapping div', function () {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should a Quote component', function () {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find(Quote)).to.have.length(1);
  });
  
});
