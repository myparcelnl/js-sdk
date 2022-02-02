let fetchFunction: typeof fetch = global.fetch;

export const originalFetch = {
  set(value: typeof fetch): void {
    fetchFunction = value;
  },

  get(): typeof fetch {
    return fetchFunction;
  },
};
