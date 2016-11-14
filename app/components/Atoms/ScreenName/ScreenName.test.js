import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ScreenName from './ScreenName';

describe('components/atoms/screenName', function() {
  it('should render to static HTML', function() {
    expect(render(<ScreenName>foo</ScreenName>).text()).toEqual('foo');
  });
  it('should have a "screenName" class', function() {
    expect(shallow(<ScreenName>foo</ScreenName>).hasClass('screenName')).toEqual(true);
  });
});
