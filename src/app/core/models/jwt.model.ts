import {User} from './user.model';

export interface JwtToken {
  user: User;
  iat: number;
  exp: number;
}
