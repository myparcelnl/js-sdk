import {describe, expect, it} from 'vitest';

describe('module exports', () => {
  it('exposes the correct data from index.ts', async () => {
    expect.assertions(1);
    const index = await import('@/index');

    expect(index).toMatchSnapshot();
  });
});
