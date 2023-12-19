import {AbstractPrivateEndpoint} from '@/model';

export class TestGet200PrivateEndpoint extends AbstractPrivateEndpoint {
  public readonly method = 'GET';
  public readonly name = 'getEndpoint';
  public readonly path = 'endpoint';
  public readonly property = 'endpoint';
}
