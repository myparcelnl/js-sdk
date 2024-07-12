// noinspection JSUnusedGlobalSymbols

import {vi} from 'vitest';
import {originalFetch} from './originalFetch';

export const resetFetchMock = (): void => {
  global.fetch = originalFetch.get();
};

export const fetchMock = vi.fn();
