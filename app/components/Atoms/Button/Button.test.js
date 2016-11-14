import React from 'react';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';

import Button from './Button';

describe('components/atoms/button', function() {
  it('should have "button" and "normal" classes', function() {
    expect(shallow(<Button type="normal" />).hasClass('button normal')).toEqual(true);
  });
  it('should have "button" and "submit" classes', function() {
    expect(shallow(<Button type="submit" />).hasClass('button submit')).toEqual(true);
  });
  it('should have value', function() {
    expect(shallow(<Button value="push" />).prop('value')).toEqual('push');
  });
  it('simulates click events', function() {
    const onClick = sinon.spy();
    const button = shallow(<Button value="push" onClick={onClick} />);
    button.simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
