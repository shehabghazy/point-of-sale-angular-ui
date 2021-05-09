import {Injectable} from '@angular/core';
import {Credentials} from '../../../core/models/credentials.model';
import {Observable, of, throwError} from 'rxjs';
import {Roles} from '../../../core/models/user.model';
import {guid} from '../../../../assets/utils';
import {AuthCookieService} from '../../../core/services/auth-cookie.service';

export const adminUserToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlcyI6WyJhZG1pbiIsInVzZXIiXX0sImlhdCI6MTYxNzQ3ODkzOCwiZXhwIjoxNjE3NTY1MzM4fQ.s9AhD5ivjECu-b8YAlmK3qK3nKHZr4mUvprs8N9JZn8';
export const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNjE3NDc4OTM4LCJleHAiOjE2MTc1NjUzMzh9.VKDjHHBQ2taFK4x5rFiX_HEj4FbNtAwhuzRo691Zkms';
export const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlcyI6WyJ1c2VyIl19LCJpYXQiOjE2MTc0Nzg5MzgsImV4cCI6MTYxNzU2NTMzOH0.dYPLYX5oWx8WhI12xrW72sHNBq8Or_Fw540SMWyEp_Q';
export const users = [
  {
    username: 'admin',
    password: 'admin',
    roles: [Roles.Admin]
  },
  {
    username: 'user',
    password: 'user',
    roles: [Roles.User]
  },
  {
    username: 'adminuser',
    password: 'adminuser',
    roles: [Roles.Admin, Roles.User]
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(credentials: Credentials): Observable<any> {
    const user = users.filter(u => u.username === credentials.username && u.password === credentials.password);
    if (user.length) {
      let tempUser = {};
      if (user[0].username === 'user') {
        tempUser = {user: {username: user[0].username, roles: user[0].roles}, token: userToken};
      }
      if (user[0].username === 'admin') {
        tempUser = {user: {username: user[0].username, roles: user[0].roles}, token: adminToken};
      }
      if (user[0].username === 'adminuser') {
        tempUser = {user: {username: user[0].username, roles: user[0].roles}, token: adminUserToken};
      }
      return of(tempUser);
    } else {
      return throwError('Username and password does not exist');
    }
  }
}
