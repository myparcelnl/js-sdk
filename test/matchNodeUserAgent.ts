import {expect} from 'vitest';

export function matchNodeUserAgent(): unknown {
  return expect.stringMatching(/^MyParcelNL-JS-SDK\/.+? Node\/\d+\.\d+\.\d+$/);
}
