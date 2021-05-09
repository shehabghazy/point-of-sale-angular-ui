export interface User {
  username: string;
  roles: Roles[];
}

export enum Roles {
  Admin = 'admin',
  User = 'user'
}
