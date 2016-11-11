import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Loading from './Loading';

describe('components/atoms/loading', function() {
  it('should have a "loading" class', function() {
    expect(shallow(<Loading />).hasClass('loading')).toEqual(true);
  });
});
