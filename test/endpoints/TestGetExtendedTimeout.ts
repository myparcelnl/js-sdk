import {AbstractPrivateEndpoint} from '@/model';

export class TestGetExtendedTimeout extends AbstractPrivateEndpoint {
  public readonly method = 'GET';
  public readonly name = 'getExtendedTimeout';
  public readonly path = 'timeout';
  public readonly property = 'endpoint';
  public readonly timeout = 200;
}
