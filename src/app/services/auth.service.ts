import { Injectable } from '@angular/core';
import { Client, LoginRequest } from './proxies';
import { UserModel } from '../models/UserModel';

export const TOKEN_NAME = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: UserModel;

  constructor(private client: Client) { }

  login(loginRequest: LoginRequest) : void {
    this.client.login(loginRequest).subscribe((jwtDto) => {
      localStorage.setItem(TOKEN_NAME, jwtDto.token? jwtDto.token : '');
      this.user = getUser(jwtDto.token);
      this.user.token = jwtDto.token!;

      this.client.setAuthToken(jwtDto.token!);
    });
  }

  logout(): void {
    localStorage.removeItem(TOKEN_NAME);
    this.user = {} as UserModel;
    this.client.setAuthToken('');
  }

  isAuthenticated(): boolean {
    return this.user !== undefined;
  }

  hasRole(roles: string[]): boolean {
    return roles.some(r => this.user.roles.includes(r));
  }
}

function getUser(token: string | undefined): any {
  if (token === undefined) {
    throw new Error('Token is undefined');
  }

  return JSON.parse(atob(token.split('.')[1])) as UserModel;
}

