export class UserException extends Error {
  public name = 'user';

  public constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, UserException.prototype);
    this.name = 'UserException';
  }
}
