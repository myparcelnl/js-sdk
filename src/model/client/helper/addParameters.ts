import {type AbstractEndpoint} from '@/model/endpoint/AbstractEndpoint';
import {type EndpointParameters} from '@/model/client/AbstractClient.types';

export const addParameters = <E extends AbstractEndpoint>(path: string, parameters?: EndpointParameters<E>): string => {
  if (parameters) {
    const parameterSets = Object.entries(parameters).map(([key, value]) => `${key}=${value}`);

    if (parameterSets.length) {
      path += `?${parameterSets.join('&')}`;
    }
  }

  return path;
};
