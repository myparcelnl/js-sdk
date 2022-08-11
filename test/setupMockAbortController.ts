import {vi} from 'vitest';

global.AbortController = class AbortController {
  public aborted = false;

  public signal = {
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    aborted: this.aborted,
    onabort: null,
    reason: null,
    throwIfAborted: vi.fn(),
    dispatchEvent: vi.fn(),
  };

  public abort(): void {
    this.aborted = true;
  }
};
