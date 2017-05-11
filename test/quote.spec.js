import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Quote from '../client/components/Quote';
import QuoteItems from '../client/components/QuoteItems';
import Total from '../client/components/Total';

let mockProps = {
  switchEditMode: sinon.stub(),
  items: [],
  editMode: false
};

describe('<Quote>', function () {

  let wrapper;

  beforeEach(function() {
    wrapper = mount(<Quote {...mockProps} />);
  })

  describe('Amend quote', function() {

    it('should have an \'Amend quote\' element that calls switchEditMode() with true', function () {
      wrapper.find('.amend').simulate('click');
      expect(mockProps.switchEditMode.calledWith(true)).to.true;
    });

    it('should not be displayed when editMode is set to true', function () {
      mockProps.editMode = true;
      wrapper = mount(<Quote {...mockProps} />);
      expect(wrapper.find('.amend')).to.have.length(0);;
    });

  })

  it('should a QuoteItems component', function () {
    expect(wrapper.find(QuoteItems)).to.have.length(1);
  });

  it('should a Total component', function () {
    expect(wrapper.find(Total)).to.have.length(1);
  });

  it('should have an \'Discard Changes\' quote element that calls switchEditMode() with false', function () {
    wrapper.find('.discard').simulate('click');
    expect(mockProps.switchEditMode.calledWith(false)).to.true;
  });

});
