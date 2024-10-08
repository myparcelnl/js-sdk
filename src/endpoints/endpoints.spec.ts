import * as Endpoints from '.';
import {describe, expect, it} from 'vitest';

describe('Endpoints', () => {
  it.each(Object.values(Endpoints))(`%o has required properties`, (Endpoint) => {
    const endpoint = new Endpoint();
    expect(endpoint.name).not.toBeUndefined();
    expect(endpoint.path).not.toBeUndefined();
  });
});
