import {Injectable} from '@angular/core';
import {Roles, User} from '../core/models/user.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {pluck} from 'rxjs/operators';

export interface AuthState {
  user: User;
  token: string;
}

export const initialState = {
  user: {
    username: '',
    roles: []
  },
  token: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  private loggedUser = new BehaviorSubject<AuthState>(initialState);

  constructor() {
  }

  get loggedUserState(): AuthState {
    return this.loggedUser.value;
  }

  get loggedUserState$(): Observable<AuthState> {
    return this.loggedUser.asObservable();
  }

  get roles(): Roles[] {
    return this.loggedUser.value.user.roles;
  }

  get roles$(): Observable<Roles[]> {
    return this.loggedUserState$.pipe(pluck('user'), pluck('roles'));
  }

  get token(): string {
    return this.loggedUser.value.token;
  }

  setUserState(user: User, token: string): void {
    const newState = {...this.loggedUserState, user, token};
    this.loggedUser.next(newState);
  }

  logout(): void {
    this.loggedUser.next(initialState);
  }

}
