import {type HttpMethod} from '@/types';
import {AbstractPublicEndpoint} from '@/model';

export class TestGetPdfEndpoint extends AbstractPublicEndpoint {
  public readonly method: HttpMethod = 'GET';
  public readonly name = 'getPdf';
  public readonly path = 'pdf';
}
