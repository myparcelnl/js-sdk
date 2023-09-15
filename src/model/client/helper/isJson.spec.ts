import {describe, expect, it} from 'vitest';
import {isJson} from './isJson';

describe('isJson', () => {
  it('returns true when the data is JSON', () => {
    expect(isJson('{}')).toBe(true);
  });

  it('returns false when the data is not JSON', () => {
    expect(isJson('')).toBe(false);
  });
});
