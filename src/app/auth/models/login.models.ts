export interface LoginInterface {
  username: string;
  password: string;
}

export class User {
  username: string;
  password?: string;
  token: string;

  constructor() {
    this.username = '';
    this.token = '';
  }
}
