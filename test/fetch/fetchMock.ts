// noinspection JSUnusedGlobalSymbols

import {originalFetch} from './originalFetch';

export const resetFetchMock = (): void => {
  global.fetch = originalFetch.get();
};
