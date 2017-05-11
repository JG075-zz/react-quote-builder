import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import editMode from '../../client/reducers/editMode';

describe('editMode', function () {

  it('should return action.status when action.type is \'SWITCH_EDIT_MODE\'', function () {
    const action = {
      type: 'SWITCH_EDIT_MODE',
      status: true
    };
    const result = editMode(null, action);
    expect(result).to.eql(true);
  });

  it('should return state when action.type is not \'SWITCH_EDIT_MODE\'', function() {
    const action = {
      type: 'TEST_MODE',
      status: true
    };
    const result = editMode(null, action);
    expect(result).to.eql(null);
  });

});
