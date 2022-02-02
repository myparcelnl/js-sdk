import {addParameters} from '@/model/client/helper/addParameters';

describe('addParameters', () => {
  it('correctly adds parameters to given path', () => {
    const result = addParameters('/this/is/my/path', {one: 1, two: 'two', three: false});

    expect(result).toBe('/this/is/my/path?one=1&two=two&three=false');
  });

  it('does not modify path without parameters', () => {
    const result = addParameters('/this/is/my/path');

    expect(result).toBe('/this/is/my/path');
  });
});
