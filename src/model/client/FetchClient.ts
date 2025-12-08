/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import {isOfType} from '@myparcel-dev/ts-utils';
import {isJson} from '@/model/client/helper/isJson';
import {type ClientConfig, type ClientRequest, type OptionsWithBody} from '@/model/client/AbstractClient.types';
import {AbstractClient} from '@/model/client/AbstractClient';

export class FetchClient extends AbstractClient {
  public constructor(config?: ClientConfig) {
    super(config);
  }

  protected request: ClientRequest = async (endpoint, options) => {
    // Run the request interceptors.
    for (const interceptor of this.interceptors.request.fns) {
      options = await interceptor(options);
    }

    /* c8 ignore next */
    const timeout = endpoint.getTimeout() ?? options.timeout;

    const controller = new AbortController();

    const config: RequestInit = {
      method: endpoint.method,
      headers: options.headers,
      signal: controller.signal,
    };

    let timeoutId: NodeJS.Timeout | undefined;

    /* c8 ignore start */
    if (timeout) {
      timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);
    }
    /* c8 ignore stop */

    if (isOfType<OptionsWithBody<typeof endpoint>>(options, 'body')) {
      if (options.body instanceof FormData) {
        // FormData should be set as body directly.
        config.body = options.body;
      } else {
        config.body = JSON.stringify(options.body);
      }
    }

    /* c8 ignore start */
    try {
      const response = await fetch(this.createUrl(endpoint, options), config);

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
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
    /* c8 ignore stop */
  };
}
