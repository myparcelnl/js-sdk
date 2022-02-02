import {ErrorResponse} from '@/types/request.types';

export class ApiException extends Error {
  public data: ErrorResponse;

  public constructor(error: ErrorResponse) {
    super(error.message);
    Object.setPrototypeOf(this, ApiException.prototype);
    this.name = 'ApiException';
    this.data = error;
  }
}
