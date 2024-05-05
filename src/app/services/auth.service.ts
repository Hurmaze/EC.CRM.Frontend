import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../DTOs/Requests/login-request';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { JwtAuth } from '../models/jwtAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = `${environment.baseApiUrl}/auth/login`;

  constructor(private http: HttpClient) { }

  public login(loginRequest: LoginRequest) : Observable<JwtAuth> {
    return this.http.post<JwtAuth>(this.loginUrl, loginRequest);
  }
}
