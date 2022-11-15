import {ClientRequest, OptionsWithBody} from '@/model/client/AbstractClient.types';
import {AbstractClient} from '@/model/client/AbstractClient';
import {isOfType} from '@myparcel/ts-utils';

export class FetchClient extends AbstractClient {
  protected request: ClientRequest = async (endpoint, options) => {
    const timeoutController = new AbortController();
    const id = setTimeout(() => timeoutController.abort(), options.timeout);

    const config: RequestInit = {
      method: endpoint.method,
      headers: options.headers,
      ...(options.timeout && {signal: timeoutController.signal}),
    };

    if (isOfType<OptionsWithBody<typeof endpoint>>(options, 'body')) {
      config.body = JSON.stringify(options.body);
    }

    const response = await fetch(this.createUrl(endpoint, options), config);
    clearTimeout(id);

    if (response.body) {
      if (response.headers.get('Content-Type')?.includes('application/json')) {
        return response.json();
      }

      return response.text();
    }
  };
}
