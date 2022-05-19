import {ClientRequest, OptionsWithBody} from '@/model/client/AbstractClient.types';
import {AbstractClient} from '@/model/client/AbstractClient';
import {isOfType} from '@/utils/isOfType';

export class FetchClient extends AbstractClient {
  protected request: ClientRequest = async (endpoint, options) => {
    const config: RequestInit = {
      method: endpoint.method,
      headers: options.headers,
    };

    if (isOfType<OptionsWithBody<typeof endpoint>>(options, 'body')) {
      config.body = JSON.stringify(options.body);
    }

    const request = await fetch(this.createUrl(endpoint, options), config);

    return request.json();
  };
}
