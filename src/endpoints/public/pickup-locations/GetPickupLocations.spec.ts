import {describe, expect, it} from 'vitest';
import {GetPickupLocations} from '@/endpoints/public/pickup-locations/GetPickupLocations';

describe('GetPickupLocations', () => {
  it('requests version 2.0 of the endpoint', () => {
    const endpoint = new GetPickupLocations();

    expect(endpoint.getHeaders().Accept).toBe('application/json;version=2.0');
  });
});
