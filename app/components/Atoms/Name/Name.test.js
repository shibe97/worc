import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Name from './Name';

describe('components/atoms/name', function() {
  it('should render to static HTML', function() {
    expect(render(<Name>foo</Name>).text()).toEqual('foo');
  });
  it('should have a "name" class', function() {
    expect(shallow(<Name>foo</Name>).hasClass('name')).toEqual(true);
  });
});
