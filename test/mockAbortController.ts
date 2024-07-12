/* eslint-disable @typescript-eslint/explicit-member-accessibility,@typescript-eslint/explicit-function-return-type */
import {vi} from 'vitest';

global.AbortController = class AbortController {
  aborted = false;

  signal = {
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    aborted: this.aborted,
    onabort: null,
    reason: null,
    throwIfAborted: vi.fn(),
    dispatchEvent: vi.fn(),
    any(signals: Iterable<AbortSignal>): AbortSignal {
      return signals[Symbol.iterator]().next().value;
    },
  };

  abort() {
    this.aborted = true;
  }
};
