import { Component } from '@angular/core';
import { LoginRequest } from '../../DTOs/Requests/login-request';
import { Client } from '../../services/proxies';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private client: Client) { }

  login(loginRequest: LoginRequest) : void {
    this.client.login(loginRequest).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.token? jwtDto.token : '');
    });
  }
}
