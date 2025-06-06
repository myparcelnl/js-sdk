import {isOfType} from '@myparcel/ts-utils';
import {isJson} from '@/model/client/helper/isJson';
import {type ClientConfig, type ClientRequest, type OptionsWithBody} from '@/model/client/AbstractClient.types';
import {AbstractClient} from '@/model/client/AbstractClient';

export class FetchClient extends AbstractClient {
  public constructor(config?: ClientConfig) {
    super(config);
  }

  protected request: ClientRequest = async (endpoint, options) => {
    const timeout = endpoint.getTimeout() ?? options.timeout;
    const timeoutController = new AbortController();
    const id = setTimeout(() => timeoutController.abort(), timeout);

    let config: RequestInit = {
      method: endpoint.method,
      headers: options.headers,
      ...(timeout && {signal: timeoutController.signal}),
    };

    if (isOfType<OptionsWithBody<typeof endpoint>>(options, 'body')) {
      if (options.body instanceof FormData) {
        // FormData should be set as body directly.
        config.body = options.body;
      } else {
        config.body = JSON.stringify(options.body);
      }
    }

    // Run the request interceptors.
    for (const interceptor of this.interceptors.request.fns) {
      config = await interceptor(config);
    }

    const response = await fetch(this.createUrl(endpoint, options), config);
    clearTimeout(id);

    if (response.body) {
      if (
        response.headers.get('Content-Disposition')?.includes('attachment') ||
        response.headers.get('Content-Type')?.includes('application/pdf')
      ) {
        return response.blob();
      }

      const text = await response.text();

      if (response.headers.get('Content-Type')?.includes('application/json') && isJson(text)) {
        return JSON.parse(text);
      }

      return text;
    }
  };
}
