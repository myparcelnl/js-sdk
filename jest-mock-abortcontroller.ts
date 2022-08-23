/* global jest */

global.AbortController = class AbortController {
  aborted = false;

  abort() {
    this.aborted = true;
  };

  signal = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    aborted: this.aborted,
    onabort: null,
    reason: null,
    throwIfAborted: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};
