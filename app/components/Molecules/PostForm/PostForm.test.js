import React from 'react';
import { shallow, mount, render } from 'enzyme';

import PostForm from './PostForm';

describe('components/molecules/postForm', function() {
  it('should have a "postForm" class', function() {
    expect(shallow(<PostForm />).hasClass('postForm')).toEqual(true);
  });
});
