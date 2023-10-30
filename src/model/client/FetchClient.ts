import {type ClientConfig, type ClientRequest, type OptionsWithBody} from '@/model/client/AbstractClient.types';
import {AbstractClient} from '@/model/client/AbstractClient';
import {isJson} from '@/model/client/helper/isJson';
import {isOfType} from '@myparcel/ts-utils';

export class FetchClient extends AbstractClient {
  public constructor(config?: ClientConfig) {
    super(config);
  }

  protected request: ClientRequest = async (endpoint, options) => {
    const timeoutController = new AbortController();
    const id = setTimeout(() => timeoutController.abort(), options.timeout);

    const config: RequestInit = {
      method: endpoint.method,
      headers: options.headers,
      ...(options.timeout && {signal: timeoutController.signal}),
    };

    if (isOfType<OptionsWithBody<typeof endpoint>>(options, 'body')) {
      if (options.body instanceof FormData) {
        // FormData should be set as body directly.
        config.body = options.body;
      } else {
        config.body = JSON.stringify(options.body);
      }
    }

    const response = await fetch(this.createUrl(endpoint, options), config);
    clearTimeout(id);

    if (response.body) {
      if (response.headers.get('Content-Disposition')?.includes('attachment')) {
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
