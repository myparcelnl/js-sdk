import {describe, expect, it} from 'vitest';
import * as INDEX from '@/index';

describe('module exports', () => {
  it('exposes the correct data from index.ts', async () => {
    expect.assertions(1);

    expect(INDEX).toMatchSnapshot();
  });
});
